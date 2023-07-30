import React, { useState } from 'react';
import './styles.css';
import WelcomeBanner from '../components/Bienvenida'; 
import Popup from '../components/Popup.jsx';

const Postulante = () => {
  const [files, setFiles] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e, field) => {
    const selectedFile = e.target.files[0];
    setFiles({
      ...files,
      [field]: selectedFile,
    });
    getNumPages(selectedFile, field);
  };

  const getNumPages = async (file, field) => {
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      let numPages = 0;

      for (let i = 0; i < uint8Array.length - 4; i++) {
        if (
          String.fromCharCode(uint8Array[i]) === '/' &&
          String.fromCharCode(uint8Array[i + 1]) === 'P' &&
          String.fromCharCode(uint8Array[i + 2]) === 'a' &&
          String.fromCharCode(uint8Array[i + 3]) === 'g' &&
          String.fromCharCode(uint8Array[i + 4]) === 'e'
        ) {
          numPages++;
        }
      }

      setFiles({
        ...files,
        [`${field}-pages`]: numPages,
      });
    }
  };

  const handleAccept = () =>{
    setShowPopup(true);
  };

  const handleClosePopup = () => {
  setShowPopup(false);
  };

  return (
    <div className="postulante-container">
      <WelcomeBanner />
      <table className="document-table">
        <thead>
          <tr>
            <th>Documentos</th>
            <th>Formulario</th>
            <th>Número de páginas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hoja de vida formato ESPE</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'hojaVida')}
              />
            </td>
            <td>{files['hojaVida-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Copia de cédula</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'copiaCedula')}
              />
            </td>
            <td>{files['copiaCedula-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Certificado de votación</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'certificadoVotacion')}
              />
            </td>
            <td>{files['certificadoVotacion-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Certificado de registro de título</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'registroTitulo')}
              />
            </td>
            <td>{files['registroTitulo-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Experiencia de docente</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'experienciaDocente')}
              />
            </td>
            <td>{files['experienciaDocente-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Certificado de no tener impedimento de ejercer cargo público</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'noImpedimento')}
              />
            </td>
            <td>{files['noImpedimento-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Certificado de no tener responsabilidades administrativas</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'noResponsabilidades')}
              />
            </td>
            <td>{files['noResponsabilidades-pages'] || 0}</td>
          </tr>
          <tr>
            <td>Experiencia Profesional</td>
            <td>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'experienciaProf')}
              />
            </td>
            <td>{files['experienciaProf-pages'] || 0}</td>
          </tr>
        </tbody>
      </table>
        <button className="btn-aceptar" onClick={handleAccept}>Aceptar</button>
        {showPopup && (
          <Popup
            mensaje="DATOS SUBIDOS CORRECTAMENTE"
            ruta="/plataforma" 
            onClose={handleClosePopup}
          />
        )}
    </div>
  );
};

export default Postulante;
