import imgCoruja from "./image/coruja.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Coruja - Símbolo da Sabedoria</h1>
      <img src={imgCoruja} alt={"imagem de coruja"} />
      <p>
        A mitologia grega tem muita influência, tanto que Atena, deusa da guerra e da
        sabedoria, tinha uma coruja como mascote. Os gregos consideravam a noite
        como o momento do pensamento filosófico e da revelação intelectual e a
        coruja, por ser uma ave noturna, acabou representando essa busca pelo
        saber. Há ainda uma outra explicação para tal relação, da qual,
        certamente, o animal não se orgulharia tanto. Com seus olhos grandes e
        desproporcionais, a coruja se tornou também símbolo da feiúra. Numa
        língua nórdica antiga, ela era chamada de ugla, palavra que imitava o
        som emitido pela ave e que daria origem ao termo ugly, “feio” em inglês.
        “Assim, a coruja segue o estereótipo do sábio, que geralmente é tido
        como alguém mais preocupado com as divagações interiores que com a
        aparência externa”, diz o helenista (estudioso da civilização grega)
        Antônio Medina Rodrigues, da Universidade de São Paulo (USP).
      </p>
    </div>
  );
}

export default App;


