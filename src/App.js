import './App.css';
import React from 'react';
import Button from './components/button';
import Input from './components/input';
import TitleIcon from '@mui/icons-material/Title';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InboxIcon from '@mui/icons-material/Inbox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Form-Tittle">FORMULARIO PQRS ACUEDUCTO CERRITOS</h1>
      </header>
        <div className="Form-App">
          <Input Icon={TitleIcon} className="input-with-icon" style={{ width: '100%', border: 'none'}} label="Nombre completo:"/>
          <Input Icon={AlternateEmailIcon} className="input-with-icon" style={{ width: '100%', border: 'none' }} label="Email:" />
          <Input Icon={LocationCityIcon} className="input-with-icon" type="select" style={{ width: '100%', border: 'none' }} label="Ciudad:" options={[
            {value: '1', label: 'Bogotá D.C'},
            {value: '2', label: 'Medellín'},
            {value: '3', label: 'Cali'},
            {value: '4', label: 'Barranquilla'},
            {value: '5', label: 'Cartagena'},
          ]} />
            <Input Icon={FormatListBulletedIcon} className="input-with-icon" type="select" style={{ width: '100%', border: 'none' }} label="Tipo:" options={[
            {value: '1', label: 'Petición'},
            {value: '2', label: 'Queja'},
            {value: '3', label: 'Reclamo'},
          ]} />
          <Input Icon={InboxIcon} className="input-with-icon" style={{ width: '100%', padding: '6.5em 0.5em', border: 'none' }} label="Descripción:" placeholder="Max 1000 caracteres ...." />
        </div>
    </div>
  );
}

export default App;
