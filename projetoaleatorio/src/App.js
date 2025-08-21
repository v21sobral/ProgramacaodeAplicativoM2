import React, { useState } from 'react';
import './App.css';

function App() {
  // Cria uma variável e um setter (forma de adicionar dados) para o usuário.
  const [produto, setProduto] = useState('');

  // Cria uma variável e um setter (forma de adicionar dados) para os usuários.
  // Inicializa com uma lista de usuários pré-definida.
  const [produtos, setprodutos] = useState([]);

  // Função para verificar se o usuário já existe e adicioná-lo à lista.
  const adicionarCompras = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Se o usuário já existir, exibe um alerta.
    if (produtos.includes(produto)) {
      alert('Produto já existe!');
      return;
    }

    if (produto.trim() === '') {
      alert('Por favor, digite um nome de usuário válido.');
      return;
    }

    // Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
    // Adiciona todos os usuários já existentes e o novo usuário.
    setprodutos([...produtos, produto]);
    setProduto('');
  };

  // Função para limpar toda a lista de compras
  const limparLista = () => {
    setprodutos([]);
  };

  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <form id="formUsuario" onSubmit={adicionarCompras}>
        <input
          type="text"
          id="comprasInput"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          placeholder="Digite o produto"
          autoComplete="off"
        />
        <button type="submit">Adicionar Produto</button>
        <div id="mensagem" style={{ color: 'red', marginTop: '8px' }}></div>
      </form>

      <hr />
      <h2>Lista de produtos adicionados:</h2>
      
      {/* Botão para limpar a lista - só aparece se houver produtos */}
      {produtos.length > 0 && (
        <button 
          onClick={limparLista}
          style={{ 
            backgroundColor: '#FFAE00', 
            color: 'white', 
            padding: '8px 16px', 
            border: 'none', 
            borderRadius: '4px',
            marginBottom: '16px',
            cursor: 'pointer'
          }}
        >
          Limpar Lista
        </button>
      )}
      
      <ul>
        {produtos.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
