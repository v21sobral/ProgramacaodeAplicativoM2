// src\Components\InfoClient
import { useState } from 'react';
import './styles.css'

function InfoClient() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, {nome, email }]);
        setNome('');
        setEmail('');
    }   

    return (
        <div>
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={adicionarCliente}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}           
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <h3>Clientes Cadastrados:</h3>
                    <ul>
                        {listaClientes.map((cliente, index) => (
                            <li key={index}>{cliente.nome} - {cliente.email}</li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Adicionar Cliente</button>
            </form>

            <hr /> 
        </div>
    );
}

export default InfoClient;

