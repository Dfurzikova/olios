import React, { Component } from 'react';
import './Home.scss';
// import Hamburger from '../Hamburger/Hamburger';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';

import { cn } from '@bem-react/classname';
const home = cn('Home');

class Home extends Component {
    render() {
        return (
            <div className={home()}>
                <Slider>
                    <div className={home('Info')}>
                        <h1 className={home('BackgroundText')}>NEWEST</h1>
                        <h2 className={home('Title')}>OLIOS</h2>
                        <h2 className={home('Subtitle')}>NEWEST FURNITURE SHOP TEMPLATE</h2>
                        <Button className={home('Button', ['Button_color'])} name="VIEW MORE" />
                    </div>
                </Slider>
            </div>
        )
    }
}
export default Home;
