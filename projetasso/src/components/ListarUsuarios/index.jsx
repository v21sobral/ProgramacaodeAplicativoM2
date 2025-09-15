// projetasso\src\components\ListarUsuarios\ListarDados.jsx

import React from 'react';
import './style.css';

function ListarDados({ listaClientes }) {
    return (
        <div>
            <h3>Usuários Cadastrados:</h3>
            <ul>
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email} - {cliente.telefone}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListarDados;
