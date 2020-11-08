import React from "react";

class LogoutPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // TODO: send the request to the API
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Logout" />
      </form>
    );
  }
}

export default LogoutPage;
