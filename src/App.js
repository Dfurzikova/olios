import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Sidebar />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        {/* <Route path="/basket" component={Basket} />
                        <Route path="/search" component={search} />
                        <Route component={Error} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
