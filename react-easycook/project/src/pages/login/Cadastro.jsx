import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/easycook1-nobg.png";
import "../../styles/Cadastro.css";
import { FetchScript } from "../../scripts/ApiBackend";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangeDataNasc = this.onChangeDataNasc.bind(this);
    this.onChangeId = this.onChangeId.bind(this);

    this.state = {
      id: "",
      username: "",
      email: "",
      password: "",
      cpf: "",
      dataNasc: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeCpf(e) {
    this.setState({
      cpf: e.target.value
    });
  }

  onChangeDataNasc(e) {
    this.setState({
      dataNasc: e.target.value
    });
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.cpf,
        this.state.dataNasc,
        this.state.id
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <img
          src={logo}
          alt="Easy Cook logo"
          className="mx-auto d-block blend-mode"
        />
        <Form
          onSubmit={this.handleRegister}
          ref={c => {
            this.form = c;
          }}
        >
        {!this.state.successful && ( )}
          <div className="row">
            <div className="col-8 mx-auto">
              <label htmlFor="nome">Nome</label>
              <Input
                id="nome"
                placeholder="Nome Completo"
                type="text"
                name="userEmail"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required, vusername]}
                className="form-control bg-branco"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-8 mx-auto">
              <label htmlFor="userEmail">E-mail</label>
              <Input
                id="userEmail"
                placeholder="Seu e-mail"
                type="email"
                name="userEmail"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required, email]}
                className="form-control bg-branco"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-8 mx-auto">
              <label htmlFor="userCpf">CPF</label>
              <Input
                id="userCpf"
                placeholder="Seu Cadastro de Pessoa Física"
                type="number"
                name="userEmail"
                value={this.state.cpf, this.state.id}
                onChange={this.onChangeCpf, this.onChangeId}
                validations={[required]}
                className="form-control bg-branco"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-8 mx-auto">
              <label htmlFor="userDataNasc">Data de Nascimento</label>
              <Input
                id="userDataNasc"
                placeholder="Sua data de nascimento"
                type="date"
                name="userDataNasc"
                value={this.state.dataNasc}
                onChange={this.onChangeDataNasc}
                validations={[required]}
                className="form-control bg-branco"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-8 mx-auto">
              <label htmlFor="userPassword">Senha</label>
              <Input
                id="userPassword"
                placeholder="Sua senha"
                type="password"
                name="userPassword"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required, vpassword]}
                className="form-control bg-branco"
              />
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <button
              id="button-cadastro"
              className="btn btn-primary col-3 mx-2"
              
            >
              Cadastrar-se
            </button>
            <Link to="/login" className="btn btn-primary col-3 text-white mx-2">
              Voltar
            </Link>
          </div>
         

          {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
        </Form>
      </div>
    );
  }
}

/*
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
}*/
