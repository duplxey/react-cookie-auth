import React from "react";
import axios from "axios";
import { withRouter } from 'react-router';

class LogoutPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('logout/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.props.history.push('/');
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <>
          <h2>Logout</h2>
          <p>You're not logged in.</p>
        </>
      )
    }
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

export default withRouter(LogoutPage);
