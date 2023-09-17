import React, { useState, ChangeEvent, FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/easycook1-nobg.png'
import '../styles/Cadastro.css'

export default function Login(){

  const [userNome, setUserNome] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCpf, setUserCpf] = useState('');
  const [userDataNasc, setUserDataNasc] = useState(null);
  const [userPassword, setUserPassword] = useState('');

  let emailValue = '';
  let passwordValue = '';

  return (
      <div id='login-page'>
        <div className='login-forms'>
          <img src={logo} alt="Easy Cook logo" className='blend-mode imagem-centralizada' />
          <h1>Use '@.com' e 'asd'  para autenticar</h1>

          <label htmlFor="nome">Nome</label>
          <input id='nome' placeholder='Nome Completo' type='text' 
            name='userEmail'
            onChange={ event => setUserNome(event.target.value)}
          />

          <label htmlFor="userEmail">E-mail</label>
          <input id='userEmail' placeholder='Seu e-mail' type='email' 
            name='userEmail'
            onChange={ event => setUserEmail(event.target.value)}
          />

          <label htmlFor="userCpf">CPF</label>
          <input id='userCpf' placeholder='Seu Cadastro de Pessoa Física' type='number' 
            name='userEmail'
            onChange={ event => setUserCpf(event.target.value)}
          />

          <label htmlFor="userDataNasc">Data de Nascimento</label>
          <input id='userDataNasc' placeholder='Sua data de nascimento' type='date' 
            name='userDataNasc'
            onChange={ event => setUserDataNasc(event.target.value)}
          />

          <label htmlFor="userPassword">Senha</label>
          <input id='userPassword' placeholder='Sua senha' type='password'
            name='userPassword'
            onChange={ event => setUserPassword(event.target.value)}
          /> 
           
          <button className="login-button" onClick={submitCadastro}>Cadastrar-se</button>
          <Link to="/login" className='link'>
            <button className="login-button">Voltar</button>
          </Link>
        </div>
        <h2>nome: {userNome}</h2>
        <h2>email: {userEmail} | senha: {userPassword}</h2>
        <h2>CPF: {userCpf} | Nascimento: {userDataNasc}</h2>
      </div>
  )

  function submitCadastro() {

  }
}