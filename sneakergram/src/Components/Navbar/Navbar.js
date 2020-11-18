import React from 'react';
import './Navbar.css'
import AddYeezy from '../AddYeezy/AddYeezy'
import GetYeezy from '../GetYeezy/GetYeezy'
import EditYeezy from '../EditYeezy/EditYeezy'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return (
            <Router>  
                <div class="Yeezynav">
                <Link to="/" class="a">Yeezy</Link>
                <Link to="/" class="a">GetYeezy</Link>
                <Link to="/create" class="a">AddYeezy</Link>
                <Route path ='/' exact component = {GetYeezy} />
                <Route path="/create" component={AddYeezy} />
                <Route path ='/edit/:id' component = {EditYeezy} />
                </div>
            </Router>
            // Set up of Routes of different components through the Nav Bar
        )
    }
}

export default Navbar