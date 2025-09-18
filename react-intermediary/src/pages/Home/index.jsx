// src\pages\Home\index.jsx

import './style.css'
import hero from './path/to/hero.jpg'; // importe a imagem hero

function Home() {
    return (
        <div className='home'>
            <section className="home">
                <div className='hero__text'>
                    <h1>Contabilidade descomplicada para pequenas empresas</h1>
                    <p>Serviços contábeis online, simples e rápidos para você abrir e manter sua empresa em dia.</p>
                    <div className='hero__cta'>
                        <a href="/servicos" className='btn btn--primary'>Nossos serviços</a>
                        <a href="/fale-conosco" className='btn btn'>Fale conosco</a>
                    </div>
                </div>
                <img src={hero} alt="Equipe de contabilidade" />
            </section>

            <section className='features'>
                <h2>Por que nos escolher</h2>
                <div className='grid cols-3'>
                    <div className='card'>
                        <h3>Atendimento personalizado</h3>
                        <p>Nossa equipe está sempre pronta para ajudar você com suas dúvidas e necessidades.</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Utilizamos as melhores ferramentas para garantir eficiência e segurança nos seus dados.</p>
                    </div>
                    <div className='card'>
                        <h3>Planejamento tributário</h3>
                        <p>Oferecemos planos que cabem no seu bolso, sem comprometer a qualidade dos nossos serviços.</p>
                    </div>
                </div>
            </section>

            <section className="socialProof">
                <div className='socialProof__image'>
                    <img src={office} alt="Nosso escritório" />
                </div>
                <div className='socialProof__text'>
                    <h2>Mais de 500.000.000 clientes satisfeitos</h2>
                    <p>Veja o que nossos clientes dizem sobre nós</p>
                </div>
                    
            </section>
        </div>
    );
}

export default Home;
