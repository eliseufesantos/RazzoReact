import { Link } from "react-router-dom"
import Fundo from "../../assets/fundorazzoo.jpg"
// import "./FormLogin.js"
import "./FormLogin.css"
function FormLogin() {
    return(
        <>
            <main className="login_main">
                <figure className="login_figure">
                    <img src={Fundo} alt="Fundo do Razzo"/>
                </figure>
                <form className="login_form" id="form-login">
                    <h1>Login</h1>
                    <div className="input_login">
                        <input placeholder="Email..." type="email" name="email" id="email" required/>
                        <input placeholder="Senha..." type="password" name="senha" id="senha" required/>
                    </div>
                    <button type="submit" className="btn-login">Entrar</button>
                    <p>Não possui conta? <Link to='/form-cadastro'>Se Cadastre!</Link></p>
                </form>
            </main>
            </>
    )
}

export default FormLogin