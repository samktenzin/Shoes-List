import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import GetyeezysList from './Components/GetyeezysList/GetyeezysList'
import EditYeezy from './Components/EditYeezy/EditYeezy'
import CreateYeezy from './Components/CreateYeezy/CreateYeezy'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Sidebar />
            <div>
              <Navbar />
            </div>
          </div>
          <Route path ='/' exact component = {GetyeezysList} />
          <Route path ='/edit/:id' component = {EditYeezy} />
          <Route path ='/create' component = {CreateYeezy} />
        </Router>
    );
  }
}


export default App;