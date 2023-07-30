import React, { useState } from 'react';
import './styles.css';
import Popup from '../components/Popup.jsx';

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () =>{
      setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <h1>FORMULARIO DE ADMISIÓN PARA DOCENTES</h1>
        <label>Email</label>
        <input type="text" />
        <label>Contraseña</label>
        <input type="password" />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <p onClick={() => window.location.href = '/registro'}>Ir a Registro</p>
      </div>
      {showPopup && (
        <Popup
          mensaje="Tu información será manipulada conforme a la necesidad de la institución sin lugar a reclamos, conforme a la ley de protección de datos, etc."
          ruta="/plataforma" 
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Login;
