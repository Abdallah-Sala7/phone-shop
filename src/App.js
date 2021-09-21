import React, { Component} from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import Carts from "./components/carts";
import Productes from "./components/produects";
import Prod from "./components/produects/prod";
import NewProductes from "./components/newprodect/newprodect";
import NewProd from "./components/newprodect/newprod";
import { BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./components/store/store";

class App extends Component {
  render(){
    return (  
      <div className="App">
       <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/carts' component={Carts} />
        <Route exact path='/productes' component={Productes} />
        <Route exact path='/newproductes' component={NewProductes} />
        <Route path='/mobile/:id' component={Prod}/>
        <Route path='/newprod/:id' component={NewProd}/>
       </BrowserRouter>
      </div>
    )    
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore;
