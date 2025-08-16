import styles from "./ImageModal.module.css";

const ImageModal = ({ image }) => {
  if (!image) return null;

  return (
    <div>
      <img src={image.urls.regular} alt={image.alt_description || "image"} />
      <div className={styles.imageInfo}>
        <p>{image.user.name}</p>
        <p>{image.likes} Likes</p>
        <p>{image.description || image.alt_description}</p>
      </div>
    </div>
  );
};

export default ImageModal;
