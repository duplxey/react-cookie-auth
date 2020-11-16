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
    }, { withCredentials: true, headers: { 'Content-Type': "application/json" } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  ensureCSRF(event) {
    event.preventDefault();

    console.log("Ensuring CSRF.");

    axios.get('ensure_csrf/', { withCredentials: true })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <>
          <h2>Login</h2>
          <p>You're already logged in.</p>
        </>
      )
    }
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
        <button className="btn btn-primary" onClick={this.ensureCSRF}>Ensure csrf</button>
      </>
    );
  }
}

export default LoginPage;
