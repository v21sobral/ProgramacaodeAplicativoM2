import React, { useState } from 'react';
import './App.css';

function App() {
  // Cria uma variável e um setter (forma de adicionar dados) para o usuário.
  const [usuario, setUsuario] = useState('');

  // Cria uma variável e um setter (forma de adicionar dados) para os usuários.
  // Inicializa com uma lista de usuários pré-definida.
  const [usuarios, setUsuarios] = useState([]);

  // Função para verificar se o usuário já existe e adicioná-lo à lista.
  const adicionarUsuario = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Se o usuário já existir, exibe um alerta.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    }

    if (usuario.trim() === '') {
      alert('Por favor, digite um nome de usuário válido.');
      return;
    }
   
    // Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
    // Adiciona todos os usuários já existentes e o novo usuário.
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
    
  };

  return (
    <div className="App">
      <h1>Adicionar usuários</h1>
      <form id="formUsuario" onSubmit={adicionarUsuario}>
        <input
          type="text"
          id="usuarioInput"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Digite o nome do usuário"
          autoComplete="off"
        />
        <button type="submit">Adicionar Usuário</button>
        <div id="mensagem" style={{ color: 'red', marginTop: '8px' }}></div>
      </form>

      <hr />
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

