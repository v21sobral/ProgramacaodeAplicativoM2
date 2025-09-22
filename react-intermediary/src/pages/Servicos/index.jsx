// src\pages\Servicos\index.jsx

import './style.css'

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços de gestão de entregas</h1>
            <p>Comodidade e segurança na palma da mão</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Cadastro de vendedores</h3>
                    <p>Aqui você pode oferecer seus serviços a outro condomínios de forma fácil e ágil.</p>
                </div>
                <div className='card'>
                    <h3>Controle de entregas</h3>
                    <p>Sabendo quem vai te entregar e quando a sua segurança ganha um alto nível de estado</p>
                </div>
                <div className='card'>
                    <h3>Sem contratempos</h3>
                    <p>Evite contratempos com nosso sistema de gestão de entregas, que garante a segurança e a confiança de nossos clientes.</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos