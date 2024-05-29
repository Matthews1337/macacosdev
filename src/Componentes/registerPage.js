import React from 'react';

function RegisterForm() {
    return (
        <div className="page">
            <form method="POST" className="RegisterForm">
                <h1>Register</h1>

                <p>Digite os seus dados de registro nos campos abaixo.</p>
                <label htmlFor="nome">Nome</label>
                <input type="nome" id="nome" placeholder="Digite seu nome" required/>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" autoFocus required/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" required/>


                <input type="submit" value="Criar" className="btn" />
            </form>
        </div>
    );
}

export default RegisterForm;