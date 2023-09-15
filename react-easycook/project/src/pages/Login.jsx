import React from 'react'
import logo from '../images/easycook1-nobg.png'
import '../styles/login.css'
import Rodape from '../components/Rodape'

export default function Login(){
    return (
        <div id='login-page'>
          <div className='login-forms'>
            <img src={logo} alt="Easy Cook logo" className='imagem-centralizada' />
            <label id="login">Login</label>
            <input placeholder='Seu e-mail' />
            <input placeholder='Sua senha' /> 
            <a href='localhost:3000' className="esqueci-senha">Esqueci minha senha</a>
            <button className="login-button">Login</button>
            <a href='localhost:3000' id="cadastre-se">Cadastre-se</a>
          </div>
          <div>
            <Rodape></Rodape>
          </div>
        </div>
    )
}