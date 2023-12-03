import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/easycook1-nobg.png";
import "../../styles/old.login.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUseremail = this.onChangeUseremail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = { 
      useremail: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUseremail(e) {
    this.setState({
      useremail: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.useremail, this.state.password).then(
        () => {
          this.props.router.navigate("/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    <div className="p-5 vh-100 mx-auto col-lg-6 col-12">
      <img
        src={logo}
        alt="Easy Cook logo"
        className="mx-auto d-block blend-mode"
      />
      <Form
        onSubmit={this.handleLogin}
        ref={c => {
          this.form = c;
        }}
      >
        <div className="form-outline mb-4">
          <label id="login" class="form-label">
            Login
          </label>
          <Input
            id="userEmail"
            placeholder="Seu e-mail"
            type="email"
            className="form-control bg-branco"
            name="userEmail"
            value={this.state.useremail}
            onChange={this.onChangeUseremail}
            validations={[required]}
          />
        </div>

        <div className="form-outline mb-4">
          <Input
            id="userPassword"
            placeholder="Sua senha"
            type="password"
            className="form-control bg-branco"
            name="userPassword"
            value={this.state.password}
            onChange={this.onChangePassword}
            validations={[required]}
          />
        </div>

        <div class="row mb-4">
          <div className="col text-center">
            <Link to="/cadastre-se">
              <a
                className="link-aliceblue justify-content-end"
                href="localhost:3000"
                id="cadastre-se"
              >
                Cadastre-se
              </a>
            </Link>
          </div>

          <div className="col text-center">
            <Link to="/esqueci-minha-senha">
              <a className="link-aliceblue" href="localhost:3000">
                Esqueci minha senha
              </a>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center">
          <button className="btn btn-primary col-6" disabled={this.state.loading}>
            {this.state.loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>

          </button>
        </div>
        {this.state.message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
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
  }
} 

/*
export default function Login() {
 
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [logando, setLogando] = useState("");
  const [users, setUsers] = useState([
    {
      id: "11111111111",
      userNome: "usuarioTeste",
      userEmail: "@.com",
      userCpf: "11111111111",
      userPassword: "asd",
      userDataNasc: "2023-09-24",
    },
  ]);

  let emailValue = "";
  let passwordValue = "";

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch("/usuario")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch(console.log);
  };

  return (
    <div className="p-5 vh-100 mx-auto col-lg-6 col-12">
      <img
        src={logo}
        alt="Easy Cook logo"
        className="mx-auto d-block blend-mode"
      />
      <div className="form-outline mb-4">
        <label id="login" class="form-label">
          Login
        </label>
        <input
          id="userEmail"
          placeholder="Seu e-mail"
          type="email"
          className="form-control bg-branco"
          name="userEmail"
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <input
          id="userPassword"
          placeholder="Sua senha"
          type="password"
          className="form-control bg-branco"
          name="userPassword"
          onChange={(event) => setUserPassword(event.target.value)}
        />
      </div>

      <div class="row mb-4">
        <div className="col text-center">
          <Link to="/cadastre-se">
            <a
              className="link-aliceblue justify-content-end"
              href="localhost:3000"
              id="cadastre-se"
            >
              Cadastre-se
            </a>
          </Link>
        </div>

        <div className="col text-center">
          <Link to="/esqueci-minha-senha">
            <a className="link-aliceblue" href="localhost:3000">
              Esqueci minha senha
            </a>
          </Link>
        </div>
      </div>

      <div className="row justify-content-center">
        <button className="btn btn-primary col-6" onClick={clickLogin}>
          Login
        </button>
      </div>
    </div>
  );

  function clickLogin() {
    let temp = "";
    if (userEmail === "" || userPassword === "") {
      temp = temp.concat("Os campos não podem estar vazios.");
    }
    if (!userEmail.includes("@") || !userEmail.includes(".com")) {
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


    if (i > -1 && userPassword === users[i].userPassword) {
      setLogando("Autenticado!");
      navigate("/");
      return;
    } else {
      setLogando("Email ou login invalido.");
      return;
    }

    setLogando(temp);
  }
}
*/
