
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Cart.scss';
const cart = cn('Cart');
const content = cn('Content');

class Cart extends Component {
    render() {
        return (
            <div className={cart()}>
                <div className={content()}>
                <h1 className={content('Title')}>CART</h1>
                </div>
            </div>
        )
    }
}
export default Cart;
