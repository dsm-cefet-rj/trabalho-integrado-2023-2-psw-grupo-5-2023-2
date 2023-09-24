import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/easycook1-nobg.png'
import '../styles/login.css'
import { loginsTeste } from '../mock-ups'

export default function Login(){

  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [logando, setLogando] = useState('');
  const [users, setUsers] = useState([{
    "id": "11111111111",
    "userNome": "usuarioTeste",
    "userEmail": "@.com",
    "userCpf": "11111111111",
    "userPassword": "asd",
    "userDataNasc": "2023-09-24"
  }]);

  let emailValue = '';
  let passwordValue = '';

  useEffect(() => {
    getApiData();
}, []);

const getApiData = async () => {
  const response = await fetch(
      "http://localhost:3002/users"
  ).then((response) => response.json())
  .then((data) => setUsers(data))
  .catch(console.log);
}

  return (
      <div id='login-page'>
        <div className='login-forms'>
          <img src={logo} alt="Easy Cook logo" className='blend-mode imagem-centralizada' />
          <h1>Use '@.com' e 'asd'  para autenticar</h1>
          <h1>ou se cadastre (JSON Server necessario)</h1>
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
    console.log(users);
    let i = 0;
    for (i; i <= users.length; i++) {
      console.log(i);
      if (i == users.length) {
        i = -1;
        break;
      }
      const e = users[i];
      if (e.userEmail === userEmail) {
        break;
      }
    }

    if ((i > -1) && (userPassword === users[i].userPassword)) {
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