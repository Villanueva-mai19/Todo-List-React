import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <header className="header">
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Contacto</a>
        </nav>
        <h2>Servicio Nacional de Aprendizaje</h2>
        <h3>CGMLTI Bogotá</h3>
      </header>

      <main>
        <section className="programas">
          <button>ADSO</button>
          <button>Redes de Datos</button>
          <button>Animación 3D</button>
          <button>Logística</button>
          <button>Mercadeo</button>
          <button>Sistemas</button>
        </section>

        <section className="contacto">
          <h3>Contacto</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>

          {submitted && (
            <div className="resultado">
              <h4>Datos enviados:</h4>
              <p><strong>Nombres:</strong> {formData.nombres}</p>
              <p><strong>Apellidos:</strong> {formData.apellidos}</p>
              <p><strong>Mensaje:</strong> {formData.mensaje}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
