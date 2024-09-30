import "./SectionApresentacao.css"
import Logo from "../../../assets/logo.png"
function SectionApresentacao() {
    return(
    <>
        <section className="gradient-background">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
        </section>

        <section className="apresentacao_section" id="inicio">
            <h2 className="titulo-lorem">A Razzo</h2>
            <article className="text">
                <p>
                    Nossa plataforma contará com um sistema de acompanhamento em tempo real das corridas, no qual os usuários
                    poderão fazer seus palpites sobre a ordem dos rankings e possíveis acontecimentos. Esses palpites serão
                    realizados mediante o uso de moedas, sendo a quantidade de moedas investidas proporcional ao número de
                    palpites. Ao acertarem seus palpites, os usuários serão recompensados com pontos, que lhes permitirão
                    ganhar pequenos prêmios. Além disso, ao acumular uma certa quantidade de pontos, os usuários concorrerão
                    a um super prêmio entregue no fim de cada temporada.
                </p>
            </article>
        </section>
    </>
    )
}

export default SectionApresentacao