// src\Components\AddSeries\index.jsx
import { useState } from "react";
import "./styles.css"; 

function AddSeries() {
  const [episodio, setEpisodio] = useState("");
  const [temporada, setTemporada] = useState("");
  const [listaDeSeries, setListaDeSeries] = useState([]);

  function adicionarSerie(event) {
    event.preventDefault();
    setListaDeSeries([...listaDeSeries, { episodio, temporada }]);
    setEpisodio("");
    setTemporada("");
  }

  return (
    <div className="card">
      <h2>Adicionar Episódio</h2>
      <form onSubmit={adicionarSerie}>
        <div>
          <label>Episódio</label>
          <input
            type="text"
            value={episodio}
            onChange={(e) => setEpisodio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Temporada</label>
          <input
            type="number"
            value={temporada}
            onChange={(e) => setTemporada(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <h3>Lista de Jogadores</h3>
      <ul>
        {listaDeSeries.map((item, index) => (
          <li key={index}>
            Episódio: {item.episodio} | Temporada: {item.temporada}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddSeries;