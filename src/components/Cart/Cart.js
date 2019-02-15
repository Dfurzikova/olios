
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Cart.scss';
const cart = cn('Cart');

class Cart extends Component {
    render() {
        return (
            <div className={cart()}>
                <div className={cart('Content', ['Content']) }>
                <h1 className={cart('ContentTitle')}>CART</h1>
                </div>
            </div>
        )
    }
}
export default Cart;
