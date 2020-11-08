import React from "react";

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

    // TODO: send the request to the API
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginPage;
