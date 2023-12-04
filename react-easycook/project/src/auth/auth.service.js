import axios from "axios";

const API_URL = "http://localhost:3001/auth/";

class AuthService {
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
}

export default new AuthService();
