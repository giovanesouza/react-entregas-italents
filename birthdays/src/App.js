import { useState } from 'react';
import './App.css';

// Componentes
import Header from './Components/Header/Header';
import FormBirth from './Components/FormBirth/FormBirth';
import ListBirthdays from './Components/ListBirthdays/ListBirthdays';
import Main from './Components/Main/Main';

function App() {

  const [aniversarios, setAniversarios] = useState([]);

  const atualizarValor = (novoValor) => {
    setAniversarios([...aniversarios, novoValor]);
  }

  console.log('app', aniversarios); // Imprime os valores com a lista atualizada

  return (
    <div className="App">

      <Header />

      <Main>

        <FormBirth atualizarAniversarios={atualizarValor} />
        <ListBirthdays aniversarios={aniversarios} />
        
      </Main>

    </div>
  );
}

export default App;
