import styles from "./Form.module.css";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      enqueueSnackbar("Todos los campos son obligatorios", {
        variant: "warning",
      });
      return;
    }

    console.log("Datos enviados:", form);

    enqueueSnackbar("Formulario enviado correctamente ✅", {
      variant: "success",
    });

    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Contacto</h2>

      <label className={styles.formLabel}>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        className={styles.formInput}
      />
      <label className={styles.formLabel}>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        className={styles.formInput}
      />
      <label className={styles.formLabel}>Mensaje: </label>
      <textarea
        name="mensaje"
        id=""
        value={form.mensaje}
        onChange={handleChange}
        required
        className={styles.formInputMensaje}
      />

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
