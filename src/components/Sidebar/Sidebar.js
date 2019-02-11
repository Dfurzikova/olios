
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { cn } from '@bem-react/classname';
import logo from '../../assets/logo.png';
import home from '../../assets/homepage.svg';
import cart from '../../assets/cart.svg';
import cartActive from '../../assets/cart-active.svg';

import search from '../../assets/search.png';
const sidebar = cn('Sidebar');
const navigation = cn('Navigation');

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }
    handler(e) {
        console.log(e.target.parentNode);
        console.log(e.target.parentNode.className === 'activeLink');

    }
    _renderHomeIcon() {
        return (
            <svg height="34px" version="1.1" viewBox="0 0 24 24" width="34px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <g fill="none" fillRule="evenodd" id="icon/homepage-alt" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                    <path d="M11.5,1.5 L3.5,9.5 L3.5,19.5 L9.5,19.5 L9.5,15.5 C9.5,14.396 10.396,13.5 11.5,13.5 C12.604,13.5 13.5,14.396 13.5,15.5 L13.5,19.5 L19.5,19.5 L19.5,9.5 L11.5,1.5 Z" id="lineart" stroke="#d8d8d8" />
                </g>
            </svg>
        )
    }
    _renderCartIcon() {
        return (
            <svg height="34px" version="1.1" viewBox="0 0 24 24" width="34px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <g fill="none" fillRule="evenodd" id="icon/checkout" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                    <path d="M7.5,13.5 L7.5,15.5 L19.5,15.5 M5.5,5.5 L4.5,2.5 L2.5,2.5 M19,17.5 C18.171,17.5 17.5,18.171 17.5,19 C17.5,19.829 18.171,20.5 19,20.5 C19.829,20.5 20.5,19.829 20.5,19 C20.5,18.171 19.829,17.5 19,17.5 Z M7,17.5 C6.171,17.5 5.5,18.171 5.5,19 C5.5,19.829 6.171,20.5 7,20.5 C7.829,20.5 8.5,19.829 8.5,19 C8.5,18.171 7.829,17.5 7,17.5 Z M19.5,11.5 L7.5,13.5 L5.5,5.5 L20.5,5.5 L19.5,11.5 Z" id="lineart" stroke="#d8d8d8" />
                </g>
            </svg>
        )
    }
    _renderSearchIcon() {
        return (
            <svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <g fill="none" fillRule="evenodd" id="icon/spotlight-search" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                    <path d="M20.5,20.5 L14.449,14.449 L20.5,20.5 Z M16.5,9.5 C16.5,13.366 13.366,16.5 9.5,16.5 C5.634,16.5 2.5,13.366 2.5,9.5 C2.5,5.634 5.634,2.5 9.5,2.5 C13.366,2.5 16.5,5.634 16.5,9.5 Z" id="lineart" stroke="#d8d8d8" />
                </g>
            </svg>
        )
    }
    render() {
        return (
            <div className={sidebar()}>
                <NavLink to='/'> <img src={logo} className={sidebar('Logo')} /></NavLink>
                <ul className={navigation('', ['Sidebar-Navigation'])} >
                    <li className={navigation('Item')} >
                        <NavLink to='/' > {this._renderHomeIcon()}</NavLink>
                    </li>
                    <li className={navigation('Item')}>
                        <NavLink to='/Cart' activeClassName='activeLink'> {this._renderCartIcon()}</NavLink>
                    </li>
                    <li className={navigation('Item')}>
                        <NavLink to='/search' activeClassName='activeLink'> {this._renderSearchIcon()}</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Sidebar;
