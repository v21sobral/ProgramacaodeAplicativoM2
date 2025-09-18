// src\pages\Servicos\index.jsx

import './style.css'

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços de contabilidade</h1>
            <p>Atendemos em qualquer lugar do Brasil</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Abertura de empresa</h3>
                    <p>Assessoria completa para abertura da sua empresa</p>
                </div>
                <div className='card'>
                    <h3>Fiscal e atribulado</h3>
                    <p>Emissão de notas fiscais, apuração de impostos e obrigações acessórias</p>
                </div>
                <div className='card'>
                    <h3>Folha de pagamento</h3>
                    <p>Processamento da folha de pagamento, encargos e obrigações acessórias</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos