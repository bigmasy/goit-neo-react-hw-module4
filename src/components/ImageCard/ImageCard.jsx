import style from "./ImageCard.module.css";

const ImageCard = ({ picture, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <img src={picture.urls.small} alt={picture.description} />
    </div>
  );
};

export default ImageCard;
