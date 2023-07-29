import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Profesores.css'; // Import the CSS file
import { makeStyles } from '@mui/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a237e', // Dark primary color
    },
    secondary: {
      main: '#d32f2f', // Dark secondary color
    },
    success: {
      main: '#00bfa5', // Green color
    },
  },
  typography: {
    fontFamily: 'YourCoolFont, sans-serif', // Replace 'YourCoolFont' with your preferred cool font
  },
});

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    fontSize: '18px', // Customize the font size
    color: '#00bfa5', // Customize the label color
    // Add any other custom styles you want here
  },
}));


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

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      
      <div className="school-system-form-container">

      <div className="header">
          <Typography variant="h4" gutterBottom>
            Informe de Necesidad Académica
          </Typography>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel className={classes.inputLabel}>Option 1</InputLabel>
            <Select value={option1} onChange={handleOption1Change}>
              <MenuItem value="option1_value1">Option 1 Value 1</MenuItem>
              <MenuItem value="option1_value2">Option 1 Value 2</MenuItem>
              <MenuItem value="option1_value3">Option 1 Value 3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel className={classes.inputLabel}>Option 2</InputLabel>
            <Select value={option2} onChange={handleOption2Change}>
              <MenuItem value="option2_value1">Option 2 Value 1</MenuItem>
              <MenuItem value="option2_value2">Option 2 Value 2</MenuItem>
              <MenuItem value="option2_value3">Option 2 Value 3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel className={classes.inputLabel}>Option 3</InputLabel>
            <Select value={option3} onChange={handleOption3Change}>
              <MenuItem value="option3_value1">Option 3 Value 1</MenuItem>
              <MenuItem value="option3_value2">Option 3 Value 2</MenuItem>
              <MenuItem value="option3_value3">Option 3 Value 3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button variant="contained" color="success">
          Send
        </Button>
      </div>
    </ThemeProvider>
  );
};


