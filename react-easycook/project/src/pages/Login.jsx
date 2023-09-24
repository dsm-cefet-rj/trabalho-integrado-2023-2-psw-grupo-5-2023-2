import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/easycook1-nobg.png'
import '../styles/login.css'
import { loginsTeste } from '../mock-ups'

export default function Login(){

  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [logando, setLogando] = useState('');

  let emailValue = '';
  let passwordValue = '';

  return (
      <div id='login-page'>
        <div className='login-forms'>
          <img src={logo} alt="Easy Cook logo" className='blend-mode imagem-centralizada' />
          <h1>Use '@.com' e 'asd'  para autenticar</h1>
          <label id="login">Login</label>
          <input id='userEmail' placeholder='Seu e-mail' type='email' 
            name='userEmail'
            onChange={ event => setUserEmail(event.target.value)}
          />
          <input id='userPassword' placeholder='Sua senha' type='password'
            name='userPassword'
            onChange={ event => setUserPassword(event.target.value)}
          /> 
          <button className="login-button" onClick={clickLogin}>Login</button>
          <Link className="link" to="/esqueci-minha-senha">
            <a href='localhost:3000' className="esqueci-userPassword" hidden={true}>Esqueci minha senha</a>
          </Link>
          <Link className="link" to="/cadastre-se">
            <a href='localhost:3000' id="cadastre-se">Cadastre-se</a>
          </Link>
        </div>
        <h2>teste:</h2>
        <h2 >email: {userEmail}</h2>
        <h2>senha: {userPassword}</h2>
        <h3>{logando}</h3>
      </div>
  )

  function clickLogin() {
    let temp = "";
    if (userEmail === '' || userPassword === '') {
      temp = temp.concat("Os campos não podem estar vazios.");
    }
    if (!userEmail.includes('@') || !userEmail.includes('.com')) {
      temp = temp + "Formato inválido de e-mail.";
    }
    if ((userEmail === loginsTeste[0].userEmail) && (userPassword === loginsTeste[0].userPassword)) {
      setLogando("Autenticado!");
      navigate("/");
      return;
    }
    else {
      setLogando("Email ou login invalido.");
      return;
    }
    
    setLogando(temp);
  }
}