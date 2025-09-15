import React from 'react';
import './style.css';

// Este componente recebe a lista como uma prop e apenas a exibe.
function ListarDados({ listaClientes }) {
    // REMOVA A LINHA ABAIXO. ELA É A CAUSA DO ERRO.
    // const [listaClientes, setListaClientes] = useState([]);

    return (
        <div>
            <h3>Usuários Cadastrados:</h3>
            <ul>
                {/* Ele usa a prop 'listaClientes' que veio do componente pai */}
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email} - {cliente.telefone}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListarDados;