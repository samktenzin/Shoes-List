import React from "react";
import axios from "axios";

class CreateAddYeezy extends React.Component{
    constructor (props) {
        super(props);

        this.onChangeAddYeezyDescription = this.onChangeAddYeezyDescription.bind(this);
        this.onChangeAddYeezyPrice = this.onChangeAddYeezyPrice.bind(this);
        this.onChangeAddYeezyPriority = this.onChangeAddYeezyPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            addYeezy_description: '',
            addYeezy_price: '',
            addYeezy_priority: '',
            addYeezy_purchased: false
        }
        //Setting the initial state of the component
        //with the properties above.
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Yeezy submitted:`);
        console.log(`Add Yeezy Description: ${this.state.addYeezy_description}`);
        console.log(`Add Yeezy Price: ${this.state.addYeezy_price}`);
        console.log(`Add Yeezy Priority: ${this.state.addYeezy_priority}`);

        const newAddYeezy = {
            addYeezy_description: this.state.addYeezy_description,
            addYeezy_price: this.state.addYeezy_price,
            addYeezy_priority: this.state.addYeezy_priority,
            addYeezy_purchased: this.state.addYeezy_purchased,
        };

        axios.post('http://localhost:3000/addYeezys/add', newAddYeezy)
            .then(res => console.log(res.data));
        
        this.setState({
            addYeezy_description: '',
            addYeezy_price: '',
            addYeezy_priority: '',
            addYeezy_purchased: false
        })
    }

    render () {
        return (
            <div style={{marginTop: 10, marginLeft: 1150}}>
                <h3>Add New Yeezy</h3>
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
                        <label>Price: </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.addYeezy_Price}
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

                    <div className="form-group">
                        <input type="submit" value="Add Yeezy" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateAddYeezy;