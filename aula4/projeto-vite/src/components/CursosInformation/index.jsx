// projeto-vite\src\components\CursosInformation\index.jsx
import './styles.css';

function CursosInformation() {
    const nomeCurso = "Curso presencial de React";
    const nome = "Victor Sobral de Moraes";
    const cargaHoraria = "400 horas";
    const local = "Salvador, BA";
    const dataInicio = "2024-07-01";
    const dataTermino = "2025-06-30";
    return (
        <div className="cursos-information">
            <h2>Informações do curso</h2>
            <p>Dados do curso: {nomeCurso}</p>
            <p>Nome: {nome} </p>
            <p>Carga horária: {cargaHoraria} </p>
            <p>Local: {local} </p>
            <p>Data de início: {dataInicio} </p>
            <p>Data de término: {dataTermino} </p>
        </div>
    );
}
export default CursosInformation;