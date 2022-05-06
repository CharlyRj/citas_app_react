import styles from "./Error.module.css";

const Error = ({ text }) => {
  return (
    <div className={styles["errorMensaje"]}>
      <h2>{text}</h2>
    </div>
  );
};

export default Error;
