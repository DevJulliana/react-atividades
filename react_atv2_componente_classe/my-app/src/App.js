import './App.css';
import HelloWorld from './components/ComponentFunction';
import Classe from './components/ComponentClasse'

export default function App() {
  return (
    <div className="App">
      <h1>Olá, mundo React!</h1>
      <HelloWorld/>
      <Classe livros ="Amo Livros" livro="A redoma de vidro"/>
    </div>
  );
}


