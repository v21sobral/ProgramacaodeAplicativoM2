// src\pages\FaleConosco\index.jsx
import './style.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        // Lógica para enviar o formulário
        alert('Mensagem enviada com sucesso!');
    }
        return (
            <section className='contato'>
            <h1>Fale Conosco</h1>
            <p>Guarde suas dúvidas para você!</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span>Nome:</span>
                        <input type="text" placeholder="Digite seu nome" name="nome" required />
                    </label>
                    <label className='field'>
                        <span>Email:</span>
                        <input type="email" placeholder="seuemail@gmail.com" required />
                    </label>
                    <label className='field'>
                        <span>Tel.:</span>
                        <input type="tel" placeholder="(71)9999-9999" name="telefone" required />
                    </label>
                </div>
                    <label className='field'>
                        <span>Assunto:</span>
                        <input type="text" placeholder="Ex.: Jesus está voltando..." name="assunto" required />
                    </label>
                    <label className='field'>
                        <span>Mensagem:</span>
                        <textarea placeholder="Escrever sua mensagem aqui..." name="mensagem" required></textarea>
                    </label>
                    <button className='btn' type="submit">Enviar</button>
            </form>
            </section>
        )
    }

export default FaleConosco