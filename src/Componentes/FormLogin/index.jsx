import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fundo from "../../assets/fundorazzoo.jpg";
import "./FormLogin.css";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);

        if (user && user.email === email && user.senha === senha) {
            alert('Logado com sucesso!');
        } else {
            alert('Erro ao tentar logar. Verifique suas credenciais.');
        }

        console.log('Email do form:', email);
        console.log('Senha do form:', senha);
        console.log('Email no localStorage:', user?.email);
        console.log('Senha no localStorage:', user?.senha);
    };

    return (
        <>
            <main className="login_main">
                <figure className="login_figure">
                    <img src={Fundo} alt="Fundo do Razzo" />
                </figure>
                <form className="login_form" id="form-login" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input_login">
                        <input 
                            placeholder="Email..." 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                        <input 
                            placeholder="Senha..." 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">Entrar</button>
                    <p>Não possui conta? <Link to='/form-cadastro'>Se Cadastre!</Link></p>
                </form>
            </main>
        </>
    );
}

export default FormLogin;
