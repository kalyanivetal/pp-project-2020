// App.js
import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter ,Route, Switch} from "react-router-dom";

function App(){
  return(
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          <Home />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  ) 
}
export default App; 


