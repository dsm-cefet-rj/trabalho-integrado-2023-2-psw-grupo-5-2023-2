import React, { useState, ChangeEvent, FC } from 'react'
import logo from '../images/easycook1-nobg.png'
import '../styles/login.css'
import Rodape from '../components/Rodape'

export default function Login(){

  const [userEmail, setUserEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logando, setLogando] = useState('');

  return (
      <div id='login-page'>
        <div className='login-forms'>
          <img src={logo} alt="Easy Cook logo" className='blend-mode imagem-centralizada' />
          <label id="login">Login</label>
          <input id='userEmail' placeholder='Seu e-mail' type='text' 
            name='userEmail'
            value={userEmail}
            onChange={ handleChangeEmail }
          />
          <input id='senha' placeholder='Sua senha' type='password'
            name='senha'
            value={senha}
            onChange={ handleChangePassword }
          /> 
          <a href='localhost:3000' className="esqueci-senha">Esqueci minha senha</a>
          <button className="login-button" onClick={clickLogin}>Login</button>
          <a href='localhost:3000' id="cadastre-se">Cadastre-se</a>
        </div>
        <h2>teste:</h2>
        <h3>{userEmail}</h3>
        <h3>{senha}</h3>
        <h3>{logando}</h3>
      </div>
  )

  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setSenha(e.target.value);
  }

  function clickLogin() {
    if (userEmail == '' || senha == '') {
      setLogando("Os campos não podem estar vazios")
    }
  }
}