
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { cn } from '@bem-react/classname';
import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import basket from '../../assets/basket.png';
import search from '../../assets/search.png';
const sidebar = cn('Sidebar');
const navigation = cn('Navigation');

class Sidebar extends Component {
    render() {
        return (
            <div className={sidebar()}>
                <NavLink to='/'> <img src ={logo} className={sidebar('Logo')} /></NavLink>
                <ul className={navigation('',['Sidebar-Navigation']) }>
                    <li className={navigation('Item')}>  <NavLink to='/'> <img src ={home}  /></NavLink></li>
                    <li className={navigation('Item')}> <NavLink to='/basket'> <img src ={basket}  /></NavLink></li>
                    <li className={navigation('Item')}> <NavLink to='/search'> <img src ={search}  /></NavLink></li>
                </ul>
            </div>
        )
    }
}
export default Sidebar;
