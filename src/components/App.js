import React, { Component } from "react";
import Inventory from "./Inventory";
import Order     from "./Order";
import Header    from "./Header";

class App extends Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
        console.log(fishes);
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood now"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>   
        )}
    }

export default App;