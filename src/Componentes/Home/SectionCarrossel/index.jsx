import "./SectionCarrossel.css"
import "./SectionCarrossel.js"
import Azul from "../../../assets/carro-azul.svg"
import Vermelho from "../../../assets/carro-vermelho.svg"
import Laranja from "../../../assets/carro-laranja.svg"
import Azul3 from "../../../assets/carro-azul3.svg"
// import 'swiper/css';

function SectionCarrossel() {
    return(
    <div className="container__carrossel">
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>

                <div className="slide primeiro">

                    <img src={Azul} alt="Carro Azul"/>
                </div>
                <div className="slide">

                    <img src={Laranja} alt="Carro Laranja"/>
                </div>

                <div className="slide">
                    <img src={Vermelho} alt="Carro Vermelho"/>
                </div>

                <div className="slide">
                    <img src={Azul3} alt="Aleatório"/>
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>

            </div>

            <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
            </div>
        </div>
    </div>
    )
}

export default SectionCarrossel