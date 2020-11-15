import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Post from './Components/Posts/Post';

class App extends Component {
  render() {
    return (
      <div>
            <Sidebar />
            <div>
              <Post />
            </div>
          </div>
    );
  }
}


export default App;