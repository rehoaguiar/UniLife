import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from "./components/Inicio.jsx";
import Beneficios from './components/Beneficios.jsx';
import Diferenciais from './components/Diferenciais.jsx';
import Apresentacao from './components/Apresentacao.jsx';
import Depoimentos from './components/Depoimentos.jsx';
import Contato from './components/Contato.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
      <Beneficios />
      <Diferenciais />
      <Apresentacao />
      <Depoimentos />
      <Contato />
    </>
  )
}

export default App
