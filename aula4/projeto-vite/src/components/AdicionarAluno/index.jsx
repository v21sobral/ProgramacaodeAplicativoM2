// aula4\projeto-vite\src\components\AdicionarAluno\index.jsx
import { useState } from "react";
import './styles.css'

function AdicionarAluno({ onAdcionarAluno}) {
    const [usuario, setUsuario] = useState("");
    const [idade, setIdade] = useState("");
    const [curso, setCurso] = useState("");
    
    const addAluno = (event) => {
        event.preventDefault();
        onAdcionarAluno({ usuario, idade, curso });
        setUsuario("");
        setIdade("");
        setCurso("");
    } 
    return (
        <>
        <form onSubmit={addAluno}>
            <div className="adicionar-aluno">
                <h2>Adicionar novo estudante</h2>
                <input 
                    type="text" 
                    placeholder="Nome do estudante"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </div>
        </form> 
            
        </>
    );
}

export default AdicionarAluno;