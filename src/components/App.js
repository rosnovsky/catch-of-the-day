import React, { Component } from "react";
import Inventory from "./Inventory";
import Order     from "./Order";
import Header    from "./Header";

class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Order />
                <Inventory />
            </div>   
        )}
    }

export default App;