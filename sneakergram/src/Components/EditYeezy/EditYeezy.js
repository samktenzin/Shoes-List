import React from "react";
import axios from 'axios';

class EditYeezy extends React.Component{

    constructor(props) {
        super(props);

        this.onChangeAddYeezyDescription = this.onChangeAddYeezyDescription.bind(this);
        this.onChangeAddYeezyPrice = this.onChangeAddYeezyPrice.bind(this);
        this.onChangeAddYeezyPriority = this.onChangeAddYeezyPriority.bind(this);
        this.onChangeAddYeezyPurchased = this.onChangeAddYeezyPurchased.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            addYeezy_description: '',
            addYeezy_price: '',
            addYeezy_priority: '',
            addYeezy_purchased: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/addYeezys/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    addYeezy_description: response.data.addYeezy_description,
                    addYeezy_price: response.data.addYeezy_price,
                    addYeezy_priority: response.data.addYeezy_priority,
                    addYeezy_purchased: response.data.addYeezy_purchased
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeAddYeezyDescription(e) {
        this.setState({
            addYeezy_description: e.target.value
        });
    }

    onChangeAddYeezyPrice(e) {
        this.setState({
            addYeezy_price: e.target.value
        });
    }

    onChangeAddYeezyPriority(e) {
        this.setState({
            addYeezy_priority: e.target.value
        });
    }

    onChangeAddYeezyPurchased(e) {
        this.setState({
            addYeezy_purchased: !this.state.addYeezy_purchased
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            addYeezy_description: this.state.addYeezy_description,
            addYeezy_price: this.state.addYeezy_price,
            addYeezy_priority: this.state.addYeezy_priority,
            addYeezy_purchased: this.state.addYeezy_purchased
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render () {
        return (
            <div>
                <h3 align="right">Update Yeezy</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.addYeezy_description}
                                onChange={this.onChangeAddYeezyDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.addYeezy_price}
                                onChange={this.onChangeAddYeezyPrice}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.addYeezy_priority==='Low'} 
                                    onChange={this.onChangeAddYeezyPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.addYeezy_priority==='Medium'} 
                                    onChange={this.onChangeAddYeezyPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.addYeezy_priority==='High'} 
                                    onChange={this.onChangeAddYeezyPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeAddYeezyPurchased}
                                checked={this.state.addYeezy_purchased}
                                value={this.state.addYeezy_purchased}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Yeezy" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditYeezy;