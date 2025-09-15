// projetasso\src\components\CadastrarUsuarios\AdicionarDados.jsx

import { useState } from 'react';
import './style.css'

function AdicionarDados() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, {nome, email, telefone }]);
        setNome('');
        setEmail('');
        setTelefone('');
    }   

    return (
        <div>
            <h2>Insira seus dados</h2>
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
                    <label>Tel.:</label>
                    <input
                        type="telefone"
                        value={telefone}           
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Adicionar Usuário</button>
            </form>

            <hr /> 
        </div>
    );
}

export default AdicionarDados;