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
      <>
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-danger">Logout</button>
        </form>
      </>
    );
  }
}

export default LogoutPage;
