import React, { Component } from "react";
import "./app.css";
import Users from './components/Users';
import { UsersProvider } from './components/UsersContext';

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
