import React, { Component } from "react";
import Inventory from "./Inventory";
import Order     from "./Order";
import Header    from "./Header";
import Fish    from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] +1 || 1;
        this.setState({ order });

    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood now"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} details={this.state.fishes[key]} key={key} index={key}>{key}</Fish>)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>   
        )}
    }

export default App;