import styles from "./Header.module.css";

const Header = () => {
  return (
    <h1 className={styles.title}>
      Seguimiento de Pacientes {""}
      <span className={styles.span}>Veterinaria</span>
    </h1>
  );
};

export default Header;
