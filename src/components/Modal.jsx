import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ setConfirm, setModal }) => {
  return (
    <div className={styles["modal"]}>
      {/* Modal content */}
      <div className={styles["modalContent"]}>
        <span
          className={styles["close"]}
          onClick={() => {
            setModal(false);
          }}
        >
          ×
        </span>
        <p>¿Estas seguro que quieres eliminar esta Cita?</p>
        <button
          className={styles["botonAceptar"]}
          onClick={() => {
            setConfirm(true);
            setModal(false);
          }}
        >
          ACEPTAR
        </button>
        <button
          className={styles["botonCancelar"]}
          onClick={() => {
            setModal(false);
          }}
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
};

export default Modal;
