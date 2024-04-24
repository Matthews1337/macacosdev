import React from 'react';

function LoginForm() {
    return (
        <div className="page">
            <form method="POST" className="formLogin">
                <h1>Login</h1>

                <p>Digite os seus dados de acesso no campo abaixo.</p>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" autoFocus required/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" required/>

                <a href="/">Esqueci minha senha</a>

                <input type="submit" value="Acessar" className="btn" />
            </form>
        </div>
    );
}

export default LoginForm;
