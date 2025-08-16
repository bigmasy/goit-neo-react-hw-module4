import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={style.error}>
      Ooops.. Something went wrong. Please try again
    </p>
  );
};

export default ErrorMessage;
