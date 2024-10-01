import "./style.css"
 import SP from "../../../assets/sp_anhembi.webp"
function SectionNextRound() {
    return (
        <>
            <section className="next_mapa_section">
                <h4 className="titulo-corrida">Próxima Corrida:</h4>
                <h1>São Paulo - Brasil</h1>
                <div id="countdown"></div>
                <img className="next-mapa" src={SP} alt=""/>
                    <a href="#"> <button className="bnt-acompanhar" role="button">Acompanhar ao vivo</button></a>
            </section>
        </>
    )
}

export default SectionNextRound