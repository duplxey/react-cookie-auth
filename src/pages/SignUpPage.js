import React from "react";

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
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
            <label htmlFor="password_confirmation">Password confirmation</label>
            <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </>
    );
  }
}

export default SignUpPage;
