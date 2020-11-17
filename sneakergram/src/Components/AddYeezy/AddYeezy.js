import React from "react";

class AddYeezy extends React.Component{
    constructor (props) {
        super(props);

        this.onChangeAddYeezyDescription = this.onChangeAddYeezyDescription.bind(this);
        this.onChangeAddYeezyImg = this.onChangeAddYeezyImg.bind(this);
        this.onChangeAddYeezyPriority = this.onChangeAddYeezyPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            AddYeezy_description: '',
            AddYeezy_img: '',
            AddYeezy_priority: '',
            AddYeezy_released: false
        }
        //Setting the initial state of the component
        //with the properties above.
    }

    onChangeAddYeezyDescription(e) {
        this.setState({
            AddYeezy_description: e.target.value
        });
    }

    onChangeAddYeezyImg(e) {
        this.setState({
            AddYeezy_img: e.target.value
        });
    }

    onChangeAddYeezyPriority(e) {
        this.setState({
            AddYeezy_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Yeezy submitted:`);
        console.log(`Add Yeezy Description: ${this.state.AddYeezy_description}`);
        console.log(`Add Yeezy Img: ${this.state.AddYeezy_img}`);
        console.log(`Add Yeezy Priority: ${this.state.todo_priority}`);
        
        this.setState({
            AddYeezy_description: '',
            AddYeezy_img: '',
            AddYeezy_priority: '',
            AddYeezy_released: false
        })
    }

    render () {
        return (
            <div style={{marginTop: 10}}>
                <h3>Get New Yeezy</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.AddYeezy_description}
                                onChange={this.onChangeAddYeezyDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.AddYeezy_img}
                                onChange={this.onChangeAddYeezyImg}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.AddYeezy_priority==='Low'} 
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
                                    checked={this.state.AddYeezy_priority==='Medium'} 
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
                                    checked={this.state.AddYeezy_priority==='High'} 
                                    onChange={this.onChangeAddYeezyPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Get Yeezy" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddYeezy;