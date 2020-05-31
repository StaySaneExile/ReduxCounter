import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Settings from "./Settings";
import Counter from "./Counter";

const App = () => {

  return (

    <div className="App">
      <Settings />
      <Counter />
    </div>

  );
}


const mapStateToProps = (state) => {
    return {
       state
    }
}
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
