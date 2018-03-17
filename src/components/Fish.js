import React, { Component } from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string, 
            description: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    }

    render() {
        const { image, name, price, description, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{description}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? "Add to cart" : "Sold Out"}</button>
            </li>
             
        )
    }
}



export default Fish;