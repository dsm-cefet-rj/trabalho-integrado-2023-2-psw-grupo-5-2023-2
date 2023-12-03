import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/easycook1-nobg.png";
import "../../styles/Cadastro.css";
import { FetchScript } from "../../scripts/ApiBackend";

export default function Login() {
  const navigate = useNavigate();

  const [userNome, setUserNome] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userDataNasc, setUserDataNasc] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [id, setId] = useState(Number);


  let emailValue = "";
  let passwordValue = "";

  const userData = {
    id: id,
    userNome: userNome,
    userEmail: userEmail,
    userCpf: userCpf,
    userPassword: userPassword,
    userDataNasc: userDataNasc,
  };

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("button-cadastro");
      btn.style.background = "#B22828";
      if (userNome && userEmail && userCpf && userDataNasc && userPassword) {
        btn.style.background = "#ff2635";
      }
    }
    enableSubmitButton();
  }, [userNome, userEmail, userCpf, userDataNasc, userPassword]);

  return (
    <div className="container">
      <img
        src={logo}
        alt="Easy Cook logo"
        className="mx-auto d-block blend-mode"
      />

      <div className="row">
        <div className="col-8 mx-auto">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            placeholder="Nome Completo"
            type="text"
            name="userEmail"
            onChange={(event) => setUserNome(event.target.value)}
            className="form-control bg-branco"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-8 mx-auto">
          <label htmlFor="userEmail">E-mail</label>
          <input
            id="userEmail"
            placeholder="Seu e-mail"
            type="email"
            name="userEmail"
            onChange={(event) => setUserEmail(event.target.value)}
            className="form-control bg-branco"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-8 mx-auto">
          <label htmlFor="userCpf">CPF</label>
          <input
            id="userCpf"
            placeholder="Seu Cadastro de Pessoa Física"
            type="number"
            name="userEmail"
            onChange={(event) => {
              setUserCpf(event.target.value);
              setId(Number(userCpf));
            }}
            className="form-control bg-branco"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-8 mx-auto">
          <label htmlFor="userDataNasc">Data de Nascimento</label>
          <input
            id="userDataNasc"
            placeholder="Sua data de nascimento"
            type="date"
            name="userDataNasc"
            onChange={(event) => setUserDataNasc(event.target.value)}
            className="form-control bg-branco"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-8 mx-auto">
          <label htmlFor="userPassword">Senha</label>
          <input
            id="userPassword"
            placeholder="Sua senha"
            type="password"
            name="userPassword"
            onChange={(event) => setUserPassword(event.target.value)}
            className="form-control bg-branco"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <button
          id="button-cadastro"
          className="btn btn-primary col-3 mx-2"
          onClick={submitCadastro}
        >
          Cadastrar-se
        </button>
        <Link to="/login" className="btn btn-primary col-3 text-white mx-2">
          Voltar
        </Link>
      </div>
      <div style={{ visibility: 'hidden' }} id="verifica-cadastro" className="row justify-content-center mt-3 col-2 mx-auto" >
            <p>Usuário Cadastrado</p>
      </div>
    </div>
  );



  async function submitCadastro() {
    try{
      // Send data to the backend via POST
      console.log("Deveria acontecer algo");
      console.log(`userData: ${userData}`);
      console.log(`JSON.stringify(userData): ${JSON.stringify(userData)}`);

      let body = JSON.stringify({
        id,
        userNome,
        userEmail,
        userCpf,
        userPassword,
        userDataNasc,
      });

      const response = FetchScript.postData(FetchScript.RequestPaths.usuarios, body);

      if (response.status === 200) {
      console.log('Cadastro realizado com SUCESSO')
      document.getElementById("verifica-cadastro").style.visibility = "visible"
      }
      if (response.status === 400) {
        console.log('erro')
        document.getElementById("verifica-cadastro").style.visibility = "hidden"
        }
    } catch(error){
     console.error('erro ao realizar o cadastro', error)
     
    }
  
  }
}