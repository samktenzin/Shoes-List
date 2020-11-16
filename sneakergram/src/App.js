import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import GetYeezy from './Components/GetYeezy/GetYeezy'
import EditYeezy from './Components/EditYeezy/EditYeezy'
import AddYeezy from './Components/AddYeezy/AddYeezy'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Sidebar />
            <Navbar />
          </div>
          <Route path ='/' exact component = {GetYeezy} />
          <Route path ='/edit/:id' component = {EditYeezy} />
          <Route path ='/create' component = {AddYeezy} />
        </Router>
    );
  }
}


export default App;