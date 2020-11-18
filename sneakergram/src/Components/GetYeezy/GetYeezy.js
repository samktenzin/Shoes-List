import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AddYeezy = props => (
    <tr>
        <td>{props.addYeezy.addYeezy_description}</td>
        <td>{props.addYeezy.addYeezy_price}</td>
        <td>{props.addYeezy.addYeezy_priority}</td>
        <td>
            <Link to={"/edit/"+props.addYeezy._id}>Edit</Link>
        </td>
    </tr>
)

class GetYeezy extends React.Component{

    constructor (props) {
        super(props);
        this.state = {addYeezys: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/addYeezys/')
            .then(response => {
                this.setState({addYeezys: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    addYeezyList() {
        return this.state.addYeezys.map(function(currentAddYeezy, i){
            return <AddYeezy addYeezy={currentAddYeezy} key={i} />;
        })
    }


    render () {
        return (
            <div>
                <h3>Yeezys List</h3>
                <table className="table table-striped" style={{ marginTop: 20, marginLeft:1150 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.addYeezyList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GetYeezy;