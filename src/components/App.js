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
        console.log(fishes);
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood now"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish details={this.state.fishes[key]} key={key}>{key}</Fish>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>   
        )}
    }

export default App;