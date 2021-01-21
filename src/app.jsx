import React, { Component } from "react";
import "./app.css";
import Users from './components/Users';

class app extends Component {
  render() {
    return (
      <UsersProvider>
        <Users />
      </UsersProvider>
    );
  }
}

export default app;
