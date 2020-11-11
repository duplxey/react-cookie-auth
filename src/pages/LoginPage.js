import React from "react";
import axios from "axios";

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.name === "csrfmiddlewaretoken") return;
    event.preventDefault();

    const state = {...this.state};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('login/', {
      username: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleCsrf(event) {
    event.preventDefault();

    axios.get('ensure_csrf/', {withCredentials: true})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  handleProtected(event) {
    axios.get('protected/')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <button type="submit" className="btn btn-warning" onClick={this.handleProtected}>Protected</button>
        <button className="btn btn-success" onClick={this.handleCsrf}>EnsureCSRF</button>
      </>
    );
  }
}

export default LoginPage;
