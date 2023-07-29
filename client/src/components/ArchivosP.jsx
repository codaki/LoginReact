import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius: 10,
        fontFamily: 'poppins, sans-serif',
      },

      rootA: {
        display: 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        fontFamily: 'poppins, sans-serif',
      },
    
      formContainer: {
        flex: 1,
        padding: '1rem 2rem',
      },
      
      avatarContainer: {
        flex: 1,
        borderRadius: '0.3rem',
        width: '400px', height: '400px',
      },
    
      avatar: {
        width: '100%',
        height: '100%',
      },

      new: {
        flex: 1,
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'left',
        gap: '1rem',
        justifyContent : 'center',
        width: '100%', height: 'auto',
        marginBottom: '1rem',
        marginTop: '-1rem',
      },

      space: {
        flex: 1,
        marginTop: '-0.8rem',
        width: '100%',
        marginLeft: '1rem',
      },

      spaceD: {
        flex: 1,
        width: '100%',
        marginRight: '1rem',
      },

}));

const ArchivosP = ({ user, roles }) => {
  const classes = useStyles();

  return (
    <div className={classes.rootA}>
      
      <div className={classes.root}>

        <div className={classes.formContainer}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={user.name}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={user.name}
          />        
          <TextField
          label="Ciudad de Residencia"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={user.name}
          />        
          <TextField
          label="Dirección"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={user.name}
          />
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={user.email}
          />
          <TextField
          style={{paddingBottom:"15px"}}
            label="Número de teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={user.email}
          />
          <TextField
          style={{paddingBottom:"15px"}}
          label="Fecha nacimiento"
          type="date" // Establece el tipo de entrada como 'date'
          defaultValue={user.date}
          InputLabelProps={{
            shrink: true, // Hace que el label se encoja para dar espacio a la fecha seleccionada
          }}
          />
          {/* Add more personal data fields here */}

    
        </div>
      </div>

      <div className={classes.new}>
      
      <div className={classes.space}>
        <div className={classes.comboContainer}>
            <Typography variant="subtitle1">Tipo de documento:</Typography>
            <Autocomplete
              options={roles}
              defaultValue={user.roles}
              renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
          </div>
      </div>
        
      <div className={classes.spaceD}>
                
      <TextField
          label="Número de Documento"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={user.name}
      />
       </div> 

      </div>

    </div>
  );
};

export default ArchivosP;
