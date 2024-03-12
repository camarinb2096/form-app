import './App.css';
import React from 'react';
import Form from './components/form.js';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Form-Tittle">FORMULARIO PQRS ACUEDUCTO CERRITOS</h1>
      </header>
      <div className='Form'>
        <Form  />
      </div>

    </div>
  );
}

export default App;
