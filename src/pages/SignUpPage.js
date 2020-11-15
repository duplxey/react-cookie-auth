import React from "react";
import axios from "axios";
import { withRouter } from 'react-router';

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password1: "",
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

    axios.post('signup/', {
      username: this.state.username,
      password: this.state.password,
      password1: this.state.password1,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.props.history.push('/');
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <>
          <h2>Sign up</h2>
          <p>You're already logged in.</p>
        </>
      )
    }
    return (
      <>
        <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password confirmation</label>
            <input type="password" className="form-control" id="password1" name="password1" value={this.state.password1} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </>
    );
  }
}

export default withRouter(SignUpPage);
