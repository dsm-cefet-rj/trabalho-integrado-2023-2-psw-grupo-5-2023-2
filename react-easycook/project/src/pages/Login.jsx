import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/easycook1-nobg.png'

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
      <div className='p-5 vh-100 bg-fundo-rosa'>
        <img src={logo} alt="Easy Cook logo" className='mx-auto d-block'/>
        <div className="form-outline mb-4">
          <label id="login" class="form-label">Login</label>
          <input id='userEmail' placeholder='Seu e-mail' type='email' class="form-control"
            name='userEmail'
            onChange={ event => setUserEmail(event.target.value)}
          />
        </div>  

        <div className="form-outline mb-4">
          <input id='userPassword' placeholder='Sua senha' type='password' class="form-control"
            name='userPassword'
            onChange={ event => setUserPassword(event.target.value)}
          />
        </div>
        
        <div class="row mb-4">

          <div className="col text-center">
            <Link to="/cadastre-se">
              <a className="link-aliceblue justify-content-end" href='localhost:3000' id="cadastre-se">Cadastre-se</a>
            </Link>
          </div>

          <div className="col text-center">
            <Link to="/esqueci-minha-senha">
              <a className="link-aliceblue" href='localhost:3000'>Esqueci minha senha</a>
            </Link>
          </div>
            
          
        </div>

        <div className="row justify-content-center">
          <button className="btn btn-primary col-6" onClick={clickLogin}>Login</button>
        </div>
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