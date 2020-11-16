import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {
    render () {
        return (
            <div class="topnav">
            <a class="active" href="#home">Yeezy's</a>
            <a href="#GetYeezy">Get Yeezy</a>
            <a href="#AddYeezy">Add Yeezy</a>
            </div>
        )
    }
}

export default Navbar