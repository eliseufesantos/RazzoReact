import { Link } from "react-router-dom"
import "./FormCadastro.css"
// import "./FormCadastro.js"
import Fundo from "../../assets/fundorazzoo.jpg"
function FormCadastro() {
    return(

        <>
        <main className="cadastro_main">
            <figure className="cadastro_figure">
                <img src={Fundo} alt="Fundo do Razzo"/>
            </figure>
            <form className="cadastro_form" id="form-cadastro">
                <h1>Cadastre-se</h1>
                <div className="input_cadastro">
                    <input placeholder="Email..." type="email" name="email" id="email" required/>
                    <input placeholder="Senha..." type="password" name="senha" id="senha" required/>
                </div>
                <div className="input_cadastro" >
                    <input placeholder="Nome.." type="nome" name="nome" id="nome" required/>
                    <input placeholder="CPF..." type="text" name="cpf" id="cpf" required/>
                </div>
                <div className="input_cadastro" >
                    <input placeholder="Data nascimento" type="date" name="data_nasc" id="data_nasc" oninput="VerificarMaioidade(this.value)" required/>
                    <input placeholder="Telefone" type="tel" name="tel" id="tel" required />
                </div>
                <div className="input_cadastro" >
                    <input placeholder="Endereço.." type="text" name="end" id="end" required/>
                </div>
                <button type="submit" className="btn-cadastro">Cadastrar</button>
                <p>Já possui conta? <Link to='/form-login'>Entrar</Link></p>
            </form>
        </main>
        </>
        
    )
}

export default FormCadastro