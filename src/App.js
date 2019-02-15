import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Cart from './components/Cart/Cart';
import Search from './components/Search/Search'
import Hamburger from './components/Hamburger/Hamburger';
import Content from './components/Content/Content'

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
                        <Route path="/living" component={Content} />
                        <Route path="/office" component={Content} />
                        <Route path="/kids" component={Content} />
                        <Route path="/kitchen" component={Content} />
                        <Route path="/accesories" component={Content} />
                        {/* <Route component={Error} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
