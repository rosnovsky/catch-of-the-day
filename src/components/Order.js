import React, { Component } from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types"; 

class Order extends Component {
    static propTypes = {
        fishes: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string, 
            description: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func
    }

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        const transitionOptions = {
            classNames: "order", 
            key, 
            timeout: { enter: 250, exit: 250 }
        };  
        if(!fish) {
            return null
        };
        if(!isAvailable){
            return (
            <CSSTransition {...transitionOptions}>
                <li key ={key}>Sorry, {fish ? fish.name : "this fish"} is sold out ☹️ <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button></li>
            </CSSTransition>
        )}
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
                                <span>{count}</span>
                            </CSSTransition> 
                        </TransitionGroup>
                        &nbsp;lbs. {fish.name}
                        
                        &nbsp;{formatPrice(count * fish.price)}
                    </span>
                    <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
                </li>
            </CSSTransition>
        )}

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";

            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}   
                </TransitionGroup>
                <div className="total">
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;