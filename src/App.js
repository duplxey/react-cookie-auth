import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogoutPage from "./pages/LogoutPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      username: null,
    };
  }

  componentDidMount() {
    axios.get('info/')
      .then((response) => {
        this.setState({
          loggedIn: response.data.loggedIn,
          username: response.data.username,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>ReactCookieAuth</h1>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {this.state.loggedIn ?
                    <>
                      <li>
                        <Link to="/logout">Logout</Link>
                      </li>
                    </>
                    :
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Sign up</Link>
                      </li>
                    </>
                  }
                </ul>
              </nav>
              <Switch>
                <Route path="/login">
                  <LoginPage loggedIn={this.state.loggedIn} />
                </Route>
                <Route path="/signup">
                  <SignUpPage loggedIn={this.state.loggedIn} />
                </Route>
                <Route path="/logout">
                  <LogoutPage loggedIn={this.state.loggedIn} />
                </Route>
                <Route path="/">
                  <HomePage loggedIn={this.state.loggedIn} username={this.state.username} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
