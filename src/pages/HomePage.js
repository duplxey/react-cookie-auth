import React from "react";

const HomePage = (props) => {
  return (
    <>
      <h2>Home</h2>
      {props.loggedIn ?
        <p>
          You're logged in as {props.username}.
        </p>
        :
        <p>
          You're not logged in.
        </p>
      }
    </>
  )
}

export default HomePage;
