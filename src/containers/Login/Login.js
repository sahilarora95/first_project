import React, { Component } from "react";
import "./login.css";
import api from "../../services/apiConstants";
const axios = require("axios");

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event, type) => {
    if (type === "username")
      this.setState({
        username: event.target.value
      
      });
    else
      this.setState({
        password: event.target.value
      });
  };

  login = () => {
    const { username, password } = this.state;
    let url = `${api.LOGIN}`;

    axios({
      method: "post",
      url,
      data: {
        username,
        password
      }
    })
      .then(function(response) {
        console.log("response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {}

  render() {
    return (
      <div id="login-container">
        <div>Login</div>
        <input
          type="text"
          placeholder="username"
          onChange={event => this.handleChange(event, "username")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={event => this.handleChange(event, "password")}
        />
        <button type="submit" id="login-button" onClick={() => "./Home/Home"}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
