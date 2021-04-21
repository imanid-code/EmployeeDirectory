import React, { Component } from "react";
import './App.css';
import Jumbotron from './components/Jumbotron';
import User from './components/User';



class App extends Component {


  render() {
    return (
      <div>
        <Jumbotron />
        <User />

      </div>

    )
  }
}


export default App;
