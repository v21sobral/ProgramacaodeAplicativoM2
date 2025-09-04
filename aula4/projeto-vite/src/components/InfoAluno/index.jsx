// projeto-vite\src\components\InfoAluno\index.jsx
import './styles.css';
import { useState} from 'react';
import AdicionarAluno from '../AdicionarAluno';

function InfoAluno() {
    const handleAdicionarAluno = (novoAluno) => {
        setAlunos([...alunos, novoAluno]);
    };
    
    const [alunos, setAlunos] = useState([]);
    return (
        <>
        <AdicionarAluno onAdcionarAluno={handleAdicionarAluno}/>
        <h2>Lista de Alunos</h2>
        {alunos.length === 0 ? (
            <p>Nenhum aluno cadastrado.</p>
        ) : ( 
            <ul>
                {alunos.map((aluno, index) => (
                    <li key={index}>
                        Nome: {aluno.usuario} <br />
                        Idade: {aluno.idade} anos <br />
                        Curso: {aluno.curso}
                    </li>
                ))}
            </ul>
        )}
        </>
    );
}

export default InfoAluno;