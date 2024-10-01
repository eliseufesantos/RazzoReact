import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./FormCadastro.css";
import Fundo from "../../assets/fundorazzoo.jpg";

function FormCadastro() {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        nome: '',
        cpf: '',
        data_nasc: '',
        tel: '',
        end: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const permissaoIdade = () => {
        confirm('É necessário ser maior de idade para se cadastrar.');
    };

    const VerificarMaioidade = (idade) => {
        const dataNascimento = new Date(idade);
        const dataMinima = new Date();
        dataMinima.setFullYear(dataMinima.getFullYear() - 18);

        if (dataNascimento > dataMinima) {
            alert('Data de nascimento inválida. Você deve ter pelo menos 18 anos.')
            setFormData({ ...formData, data_nasc: '' }); // Limpa o campo
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, nome, tel, cpf, senha, end, data_nasc } = formData

        const novoUser = {
            email,
            nome,
            telefone: tel,
            cpf,
            senha,
            end,
            data_nasc,
        };

        localStorage.setItem('user', JSON.stringify(novoUser));
        console.log(novoUser);

        if (novoUser) {
            alert("Cadastrado com sucesso!")
        }
    };

    return (
        <>
            <main className="cadastro_main">
                <figure className="cadastro_figure">
                    <img src={Fundo} alt="Fundo do Razzo" />
                </figure>
                <form className="cadastro_form" id="form-cadastro" onSubmit={handleSubmit}>
                    <h1>Cadastre-se</h1>
                    <div className="input_cadastro">
                        <input placeholder="Email..." type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input placeholder="Senha..." type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input_cadastro">
                        <input placeholder="Nome..." type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                        <input placeholder="CPF..." type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input_cadastro">
                        <input placeholder="Data de nascimento" type="date"
                            name="data_nasc"
                            value={formData.data_nasc}
                            onChange={(e) => {
                                handleChange(e);
                                VerificarMaioidade(e.target.value);
                            }}
                            required
                        />
                        <input placeholder="Telefone" type="tel"
                            name="tel"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input_cadastro">
                        <input placeholder="Endereço..." type="text"
                            name="end"
                            value={formData.end}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-cadastro" onClick={permissaoIdade}>Cadastrar</button>
                    <p>Já possui conta? <Link to='/form-login'>Entrar</Link></p>
                </form>
            </main>
        </>
    );
}

export default FormCadastro;
