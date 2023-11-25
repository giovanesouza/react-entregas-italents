import { useState } from 'react';
import './App.css';

// Componentes
import Header from './Components/Header/Header';
import FormBirth from './Components/FormBirth/FormBirth';
import ListBirthdays from './Components/ListBirthdays/ListBirthdays';

function App() {

  const [aniversarios, setAniversarios] = useState([]);

  const atualizarValor = (novoValor) => {
    setAniversarios([...aniversarios,  novoValor ]);
  }

  console.log('app', aniversarios)

  return (
    <div className="App">

      <Header />
      <FormBirth atualizarAniversarios={atualizarValor} />
      <ListBirthdays aniversarios={aniversarios} />

    </div>
  );
}

export default App;
