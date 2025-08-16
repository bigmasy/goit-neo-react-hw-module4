import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.closeBtn} onClick={onClose}>
        ×
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description || "image"}
        className={styles.modalImage}
      />
      <p className={styles.author}>{image.user.name}</p>
      <p className={styles.likes}>{image.likes} Likes</p>
      <p className={styles.description}>
        {image.description || image.alt_description}
      </p>
    </Modal>
  );
};

export default ImageModal;
