import React, { Component } from "react";
import PropTypes from "prop-types";

class AddFishForm extends Component {
    static propTypes = {
        addFish: PropTypes.func
    }

    nameRef = React.createRef();  
    priceRef = React.createRef(); 
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef(); 

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            description: this.descriptionRef.value.value,
            image: this.imageRef.value.value
        }
        this.props.addFish(fish);

        event.currentTarget.reset();
    }

    
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish} >
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="description" ref={this.descriptionRef} placeholder="Description" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;