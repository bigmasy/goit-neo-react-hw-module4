import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchPhotos } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

function App() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadMore, setLoadMore] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);

  const handleQuery = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.query.value.trim();
    if (searchValue === "") {
      toast.error("Query cannot be empty");
      return;
    }
    setLoading(true);
    setPage(1);

    setQuery(searchValue);
    setError(false);

    fetchPhotos(searchValue, 1, 12)
      .then((data) => {
        setPictures(data.results);
        setLoadMore(data.total_pages);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setPictures([]);
      })
      .finally(() => setLoading(false));
  };

  const handleLoadMore = () => {
    setLoading(true);

    const nextPage = page + 1;
    setPage(nextPage);
    fetchPhotos(query, nextPage, 12)
      .then((data) => {
        setPictures((prevData) => [...prevData, ...data.results]);
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  Modal.setAppElement("#root");
  return (
    <>
      <div>
        <Toaster />
      </div>

      <SearchBar handleQuery={handleQuery} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && (
        <ImageGallery data={pictures} openModal={openModal} />
      )}
      {loading && <Loader />}
      {page < loadMore && !loading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="overlay"
      >
        <ImageModal image={selectedImage} />
      </Modal>
    </>
  );
}

export default App;
