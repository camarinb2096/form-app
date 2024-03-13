import './App.css';
import React from 'react';
import Form from './components/form.js';
import { Copyright } from '@mui/icons-material';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Form-Tittle">FORMULARIO PQRS ACUEDUCTO CERRITOS</h1>
      </header>
      <div className='Form'>
        <Form  />
      </div>
      
      <footer className='Footer'>
        <p>© 2024 camarinb2096. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
