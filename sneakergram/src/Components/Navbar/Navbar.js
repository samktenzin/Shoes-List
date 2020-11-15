import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {
    render () {
        return (
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
        )
    }
}

export default Navbar