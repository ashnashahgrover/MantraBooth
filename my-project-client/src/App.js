import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import movie from './movies/earth.mov';


class App extends Component {

  constructor(props){
    super(props)
    let wishes=[]
    for (let i=0; i<100;i++){
      wishes.push(`Hello ${i}`)
    }
    this.state={wishes:wishes}
  }

  generateFlyingWishes = () => {
    //generate three-five(?) random numbers and make a div/li for each of them which will fly around the screen
    //upon hover, becomes animated(invites user to click)
    //upon clicking .... ()
  }

  render(){
    return (
      <div>
        {/*<header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<video
          style={{
            position: "fixed",
            width: "100%",
            left: 0,
            top: 0
          }}
          autoPlay loop muted>
          <source src={movie}  />
          </video>*/}
          <div className="el-wrap x">
          <div className="el y">HELLO</div>
          </div>
  {/*
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        {/*</header>*/}
      </div>

    )
  }
}

export default App;
