import './Conteudo.css'

export default function Conteudo(){
    return(
        /*um wrapper é como uma caixa organizadora, que serve para encapsular uma ou mais tags que formem um pedaço do
        layout, facilitando assim sua manipulação e redimensionamento em alguns casos. Nesse caso debaixo em específico,
        foi usado para conter o texto ao lado da imagem da mulher sorrindo, ambos estão juntos lado a lado, porém cada um
        em uma direção*/
        <>
        {/*mulher sentada com notebook*/}
        <div className="conteudo-wrapper">
            <div className="conteudo">
                <h1 className='titulo'> 
                Informática e tecnologia,
                tudo em um só lugar</h1>
                A Microedi é o lugar certo para manutenções de notebooks e PCs, compras de computadores já montados, acessórios e gadgets. Honestidade, confiança e preço justo com o melhor atendimento da região!
            </div>
            <img className="mulher-sentada" src="/unnamed.png" alt="" />
        </div>
        
        <div className='cards-wrapper-icones'>
            <CardBotoes/>
            <div className='informativo-botoes'>
                <h1 className='titulo'>Confiança e alta qualidade em manutenções</h1>
                Temos mais de 24 anos de experiência na manutenção e reparos de notebooks e computadores para empresas e pessoas físicas. Somos reconhecidos pelo compromisso, qualidade no atendimento e transparência no diagnóstico.
            </div>
        </div>

        {/*breve descritivo e homem fazendo joinha*/}
            <div className='solucoes-rapidas'>
                <h1 className='titulo'>Soluções rápidas e assertivas</h1>
                <p>Entendemos que o seu tempo é precioso e que precisa de um atendimento rápido,<br /> com soluções certeiras de tecnologia.</p>
            </div>

        <div className='solucoes-rapidas-wrapper'>
            <img className='homem-joinha' src="/homem-joinha-com-laptop.jpg" alt="" />
            <div className='solucoes-items'>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon'/>
                    <div className='manutencao-de-computadores'>
                        <h1>Manutenção de computadores</h1>
                        <section>Agilidade e qualidade na manutenção de notebooks e PCs. Formatação, upgrade, limpeza física, reparos, trocas de tela, etc.</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon'/>
                    <div className='instalacao-de-programas'>
                        <h1>Instalação de programas</h1>
                        <section>Instalamos programas complementares, drivers de componentes, ou algum outro programa de seu interesse</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon'/>
                    <div className='acessorios-e-gadgets'>
                        <h1>Acessórios e gadgets</h1>
                        <section>Temos diversas linhas de acessórios para completar o seu setup de trabalho e lazer, e gadgets para auxiliar no dia a dia.</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon'/>
                    <div className='computadores-montados'>
                        <h1>Computadores montados</h1>
                        <section>Temos máquinas já montadas para escritório, home e gamers. Converse com nossos especialistas para uma compra assertiva.</section><br />
                    </div>
                </div>
            </div>
            
        </div>

        {/*propostas*/}
            <div className='proposta'>
                <h1 className='titulo'>Por que nos <b>escolher ?</b></h1>
                <p>Somos especializados em tecnologia e informática <br />
                    com anos de conhecimento e expertise no mercado. <br />
                    Nosso atendimento possui um ótimo custo-benefício.</p>
            </div>

            <div className='cards-wrapper'>
                <div className='card'>
                    <CalculadoraIcon className='card-icon' />
                    <h1>Orçamentos</h1>
                    <p>Fazemos um diagnóstico completo, solicite sem compromisso.</p>
                </div>

                <div className='card-ativo'>
                    <EconomizarIcon className='card-icon' />
                    <h1>Pagamentos</h1>
                    <p>Parcelamos em até 3x no cartão. Consulte condições.</p>
                </div>

                <div className='card'>
                    <EquipeIcon className='card-icon' />
                    <h1>Corporativo</h1>
                    <p>Visitamos sua empresa para entender a demanda e propor soluções.</p>
                </div>
            </div>

        {/*contato*/}
            <div className='contato-wrapper'>
                <div>
                    <p className='diagnostico-sem-compromisso'>
                        <h1 className='titulo'>Solicite o diagnóstico e <br />orçamento sem compromisso <br /> do seu computador.</h1>
                    </p>
                </div>
                <div className='entre-em-contato'>
                    <button 
                        className='entre-em-contato-button'
                        onClick={()=> window.open("https://wa.me/5517997078504?text=Ol%C3%A1%20quero%20fazer%20um%20or%C3%A7amento", "_blank")}>
                            
                        entre em contato 
                        <WhatsappIcon className='whatsapp-icon'/>
                    </button>
                        
                </div>
            </div>
        </>
    )
}
