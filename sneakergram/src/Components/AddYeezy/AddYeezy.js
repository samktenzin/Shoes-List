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


    
    render () {
        return (
            <div>
                <p> This is the AddYeezy Compoenent</p>
            </div>
        )
    }
}

export default AddYeezy;