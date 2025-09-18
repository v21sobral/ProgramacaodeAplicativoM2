// src\components\Footer\index.jsx

import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_wrap'>
                <div>
                    <strong>Contabilidade é nóis</strong> - CNPJ: 00.000.000/0001-00
                </div>
                <div>
                    Rua Sem saída, 666 - Onde o vento faz a curva - Senai/Dendezeiros
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} Contabilidade é nóis. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer
                