import React, { Component } from 'react';
import { Grommet, Box, Heading } from 'grommet';
import './App.css';
import Chat from './Chat';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Inter',
      size: '18px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar><Heading level='3' margin='none'>Dumb Anon Chat</Heading></AppBar>
        <Box
          tag='content'
          direction='row'
          align='center'
          justify='between'
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation='medium'
          ><Chat /></Box>
      </Grommet>
    );
  }
}

export default App;