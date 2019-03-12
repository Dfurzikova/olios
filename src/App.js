import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Cart from './components/Cart/Cart';
import Search from './components/Search/Search';
import Hamburger from './components/Hamburger/Hamburger';
import Content from './components/Content/Content';
import Product from './components/Product/Product'

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

                        <Route exact path="/living" component={Content} />
                        <Route path="/living/:article" component={Product} />

                        <Route exact path="/office" component={Content} />
                        <Route path="/office/:article" component={Product} />

                        <Route exact path="/kids" component={Content} />
                        <Route path="/kids/:article" component={Product} />

                        <Route exact path="/kitchen" component={Content} />
                        <Route path="/kitchen/:article" component={Product} />

                        <Route exact path="/accesories" component={Content} />
                        <Route path="/accesories/:article" component={Product} />

                        {/* <Route component={Error} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
