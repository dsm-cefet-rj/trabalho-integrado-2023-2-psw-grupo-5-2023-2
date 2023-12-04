import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/easycook1-nobg.png";
import "../../styles/Cadastro.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../auth/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        É necessário preencher esse campo.
      </div>
    );
  }
};
const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Esse e-mail não é válido.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        A senha precisa ter entre 6 e 40 caracteres.
      </div>
    );
  }
};

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeId = this.onChangeId.bind(this);

    this.state = {
      id: "",
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };

    AuthService.logout();
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
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
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
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
          ref={(c) => {
            this.form = c;
          }}
        >
          {!this.state.successful}
          <div className="text text-center mx-auto">
            <h3>Cadastro</h3>
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
                validations={[required, vemail]}
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
            <button id="button-cadastro" className="btn btn-primary col-3 mx-2">
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
            ref={(c) => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}
