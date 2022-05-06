import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const dataLocalStore =
        JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(dataLocalStore);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["bodyCointainer"]}>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          editState={editState}
          setEditState={setEditState}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          setEditState={setEditState}
        />
      </div>
    </div>
  );
}

export default App;
