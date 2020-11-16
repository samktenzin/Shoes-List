import React from 'react';
import './Navbar.css'
import AddYeezy from '../AddYeezy/AddYeezy'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return (
            <Router>
                <div class="Yeezynav">
                <Link to="/" class="a">Yeezy</Link>
                <Link to="/" class="a">GetYeezy</Link>
                <Link to="/create" class="a">AddYeezy</Link>
                <Route path="/create" component={AddYeezy} />
                </div>
            </Router>
        )
    }
}

export default Navbar