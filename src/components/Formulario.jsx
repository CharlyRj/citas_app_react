import { useEffect, useState } from "react";
import Error from "./Error";
import styles from "./Formulario.module.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ pacientes, setPacientes, editState, setEditState }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const id = uuidv4();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, telefono, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      const clientes = {
        nombre,
        propietario,
        email,
        telefono,
        fecha,
        sintomas,
      };
      if (editState.id) {
        clientes.id = editState.id;
        const pacientesActualizados = pacientes.map((state) => {
          return state.id === editState.id ? clientes : state;
        });
        setPacientes(pacientesActualizados);
        setEditState({});
      } else {
        setError(false);
        clientes.id = id;
        setPacientes([...pacientes, clientes]);
      }
    }
    setNombre("");
    setPropietario("");
    setEmail("");
    setTelefono("");
    setFecha("");
    setSintomas("");
  };

  useEffect(() => {
    if (Object.keys(editState).length > 0) {
      setNombre(editState.nombre);
      setPropietario(editState.propietario);
      setEmail(editState.email);
      setTelefono(editState.telefono);
      setFecha(editState.fecha);
      setSintomas(editState.sintomas);
      setNombre(editState.nombre);
    }
  }, [editState]);

  return (
    <div className={styles["divFormulario"]}>
      <h2 className={styles["tituloh2"]}>Seguimiento</h2>
      <p className={styles["pFormulario"]}>
        Añade Pacientes y {""}
        <span>Administralos</span>
      </p>
      {error ? <Error text="Todos los campos son obligatorios" /> : null}

      <form className={styles.Formulario} onSubmit={handlerSubmit}>
        <div className={styles["inputsformularios"]}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propietario">Propietario</label>
          <input
            type="text"
            id="propietario"
            placeholder="Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefono</label>
          <input
            type="phone"
            id="phone"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alta">Fecha alta</label>
          <input
            type="date"
            id="alta"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sintomas">Sintomas</label>
          <textarea
            id="sintomas"
            placeholder="Agregar un sintoma"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          className={styles["inputForm"]}
          type="submit"
          value={editState.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
