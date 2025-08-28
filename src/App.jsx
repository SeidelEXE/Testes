import { useState } from 'react'
import Cabecalho from './Componentes/Cabecalho'
import Conteudo from './Componentes/Conteudo'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </Router>
    </>
  )
}

export default App
