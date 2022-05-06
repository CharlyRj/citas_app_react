import { useState, useEffect } from "react";
import Modal from "./Modal";
import styles from "./Paciente.module.css";

const Paciente = ({ paciente, pacientes, setPacientes, setEditState }) => {
  const { id, nombre, propietario, email, telefono, fecha, sintomas } =
    paciente;
  const [isModal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (confirm) {
      setPacientes(pacientes.filter((p) => p.id != id));
    }
  }, [confirm]);

  return (
    <>
      {isModal ? <Modal setConfirm={setConfirm} setModal={setModal} /> : null}
      <div className={styles.paciente}>
        <p>
          Nombre: <span>{nombre}</span>
        </p>
        <p>
          Propietario: <span>{propietario}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Telefono: <span>{telefono}</span>
        </p>
        <p>
          Fecha Alta: <span>{fecha}</span>
        </p>
        <p>
          Sintomas:
          <span>{sintomas}</span>
        </p>
        <div className={styles["botoneraPaciente"]}>
          <button
            className={styles["buttonEdit"]}
            onClick={() => {
              setEditState(paciente);
            }}
          >
            Editar
          </button>
          <button
            className={styles["buttonDelete"]}
            onClick={() => {
              setModal(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
