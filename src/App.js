import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Cart from './components/Cart/Cart';
import Search from './components/Search/Search'
import Hamburger from './components/Hamburger/Hamburger';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Sidebar />
                    <Hamburger />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/Cart" component={Cart} />
                        <Route path="/search" component={Search} />
                        {/* <Route component={Error} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
