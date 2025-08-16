import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={style.gallery}>
      {data.map((picture) => (
        <li key={picture.id}>
          <ImageCard picture={picture} onClick={() => openModal(picture)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
