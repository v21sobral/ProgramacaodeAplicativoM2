// projeto-vite\src\components\InfoAluno\index.jsx
import './styles.css';

function InfoAluno() {
    const nome = "Victor Sobral de Moraes";
    const idade = 27;
    const curso = "Análise e Desenvolvimento de Sistemas";
    return (
        <div className="info-aluno">
            <h2>Informações do estudante</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    );
}

export default InfoAluno;