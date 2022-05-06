import { useId } from "react";
import styles from "./ListaPacientes.module.css";
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes, setPacientes, setEditState }) => {
  return (
    <div className={styles["divListado"]}>
      <h2 className={styles["tituloh2"]}>Lista Pacientes</h2>
      <p className={styles["pListado"]}>
        Citas Añadidas {""} y <span>Administralas</span>
      </p>
      {pacientes.map((paciente) => {
        return (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
            setEditState={setEditState}
          />
        );
      })}
    </div>
  );
};

export default ListaPacientes;
