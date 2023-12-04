import { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/auth/";

class AuthService extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.isAuthorized = this.isAuthorized.bind(this);

    this.state = {
      useremail: "",
      message: "",
    };
  }

  login(userEmail, userPassword) {
    return axios
      .post(API_URL + "signin", {
        userEmail,
        userPassword,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(userEmail, userPassword) {
    return axios.post(API_URL + "signup", {
      userEmail,
      userPassword,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isAuthorized() {
    if (this.getCurrentUser() === null) {
      return false;
    } else {
      return true;
    }
  }
}

export default new AuthService();
