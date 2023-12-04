import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/easycook1-nobg.png";
import "../../styles/old.login.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../auth/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Esse campo é necessário.
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
      message: "",
    };
  }

  onChangeUseremail(e) {
    this.setState({
      useremail: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.useremail, this.state.password).then(
        () => {
          this.props.router.navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="p-5 vh-100 mx-auto col-lg-6 col-12">
        <img
          src={logo}
          alt="Easy Cook logo"
          className="mx-auto d-block blend-mode"
        />
        <Form
          onSubmit={this.handleLogin}
          ref={(c) => {
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
            <div className="text-center">
              <Link to="/cadastre-se">
                <a
                  className="btn btn-primary col-6 link-aliceblue"
                  href="localhost:3000"
                  id="cadastre-se"
                >
                  Cadastre-se
                </a>
              </Link>
            </div>

            <div className="col text-center" hidden={true}>
              <Link to="/esqueci-minha-senha">
                <a className="link-aliceblue" href="localhost:3000">
                  Esqueci minha senha
                </a>
              </Link>
            </div>
          </div>

          <div className="row justify-content-center">
            <button
              className="btn btn-primary col-6"
              disabled={this.state.loading}
            >
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
            ref={(c) => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}
