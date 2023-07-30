import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography, Tooltip } from '@mui/material';
import '../styles/Profesores.css'; // Import the CSS file
import {Info, Send} from '@mui/icons-material'; 
import PopUpProfesor from "../components/PopUpProfesor";
import { styled } from '@mui/material/styles';

// Create custom styled components using the `styled` function


export function Profesores ()  {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setOption3(event.target.value);
  };

    // State to control the visibility of the DynamicPopup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
      setIsPopupOpen(true);
    };
  
    // Function to close the popup when the "X" button is clicked
    const handlePopupClose = () => {
      setIsPopupOpen(false);
    };

  return (

      
      <div className="school-system-form-container">

      <div className="header">
          <Typography variant="h3" gutterBottom>
            Informe de Necesidad Académica
          </Typography>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel>Seleccionar postulación</InputLabel>
            <Select value={option1} onChange={handleOption1Change}>
              <MenuItem value="option1_value1">0232322</MenuItem>
              <MenuItem value="option1_value2">283723</MenuItem>
              <MenuItem value="option1_value3">02387</MenuItem>
            </Select>
          </FormControl>

          <Tooltip title="Información de este campo" arrow>             
            <Info fontSize="large" style={{ margin: '0.5rem' }} /> {/* Add InfoIcon */}
          </Tooltip>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel sx={{fontSize: '1.2rem', 
           color: 'white',
            }}>Seleccionar tipo de contratación</InputLabel>
            <Select value={option2} onChange={handleOption2Change}>
              <MenuItem value="option2_value1">Personal académico que desarroll actividades de tercer nivel de grado y cuarto nivel</MenuItem>
              <MenuItem value="option2_value2">Personal de apoyo académico(técnicos docentes, Ténicos de laboratorio y técnico de investigación).</MenuItem>
              <MenuItem value="option2_value3">Personal académico para la formación técnica y tecnológica.</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Información de este campo" arrow>             
            <Info fontSize="large" style={{ margin: '0.5rem' }} /> {/* Add InfoIcon */}
          </Tooltip>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel sx={{fontSize: '1.2rem', 
           color: 'white',
            }}>Seleccionar tipo de personal académico</InputLabel>
            <Select value={option3} onChange={handleOption3Change}>
              <MenuItem value="option3_value1">Auxiliar nivel 1</MenuItem>
              <MenuItem value="option3_value2">Agregado nivel 1</MenuItem>
              <MenuItem value="option3_value3">Principal nivel 1</MenuItem>
              <MenuItem value="option3_value4">Técnico docente nivel 1</MenuItem>
              <MenuItem value="option3_value5">Técnico de laboratorio nivel 1</MenuItem>
              <MenuItem value="option3_value5">Técnico de investigación nivel 1</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Información de este campo" arrow>             
            <Info fontSize="large" style={{ margin: '0.5rem' }} /> {/* Add InfoIcon */}
          </Tooltip>
        </div>

        <Button variant="contained" 
          endIcon={<Send />}  
          sx={{ padding: "10px 80px", marginTop: "1.5rem"}}
          onClick={handleButtonClick}
        >
          Enviar
        </Button>

        {isPopupOpen && (
          <PopUpProfesor
            option1={option1}
            option2={option2}
            option3={option3}
            onClose={handlePopupClose}
          />
        )}

      </div>

  );
};


