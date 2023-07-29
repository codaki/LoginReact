import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ArchivosP from '../components/ArchivosP';

const user = {
    name: 'Juan Perez',
    email: 'algo@espe.edu.ec',
};

const roles = ['admin', 'user', 'guest'];

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


export function Profesores () {
    
      
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    return (
  
      <div>
  
        <Box sx={{ bgcolor: '#C8D6C9', width: 1300, marginTop:'8rem', marginLeft:'15%' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor= 'black'
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            inkBarStyle={{background: 'black'}}
            sx={{
              backgroundColor: '#27662B',}}
            
            TabIndicatorProps = {{
              sx:{
                backgroundColor: 'Black',}
  
            }}
          >
            <Tab label="Información Personal" {...a11yProps(0)} sx={{fontFamily: 'poppins, sans-serif'}}/>
            <Tab label="Información Académica" {...a11yProps(1)} sx={{fontFamily: 'poppins, sans-serif'}}/>
            <Tab label="..." {...a11yProps(2)} sx={{fontFamily: 'poppins, sans-serif'}}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ArchivosP user={user} roles={roles} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
  
  
      </div>
    );
};
  