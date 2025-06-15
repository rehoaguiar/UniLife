import './App.css';
import Inicio from './components/Inicio';
import Beneficios from './components/Beneficios';
import Diferenciais from './components/Diferenciais';
import Apresentacao from './components/Apresentacao';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="conteudo">
      <p>o treino da sua vida ☆</p>
      <Inicio />
      <Beneficios />
      <Diferenciais />
      <Apresentacao />
      <Depoimentos />
      <Contato />
    </div>
  );
}

export default App;
