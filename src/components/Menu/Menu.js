
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './Menu.scss';
const menu = cn('Menu');

const data = {
    living: ['LIVING ROOM', require('../../assets/living.svg')],
    office: [ 'OFFICE', require('../../assets/office.svg')],
    kids: ['FOR KIDS', require('../../assets/kids.svg')],
    kitchen: ['KITCHEN', require('../../assets/kitchen.svg')],
    accesories: ['ACCESORIES',require('../../assets/accesories.svg')]
}

class Menu extends Component {
    static _renderCategory(name) {
        return (
            <>
                <div className={menu('Title')}>{data[name][0]}</div>
                <img className={menu('Icon')} src={data[name][1]} />
            </>
        )

    }
    render() {
        return (
            <div className={menu()}>
                <ul className={menu('Categories')} >
                    <li className={menu('Item')} >
                        <NavLink to='/living' activeClassName='activeCat'> {Menu._renderCategory('living')}</NavLink>
                    </li>
                    <li className={menu('Item')}>
                        <NavLink to='/office' activeClassName='activeCat'> {Menu._renderCategory('office')}</NavLink>
                    </li>
                    <li className={menu('Item')}>
                        <NavLink to='/kids' activeClassName='activeCat'> {Menu._renderCategory('kids')}</NavLink>
                    </li>
                    <li className={menu('Item')}>
                        <NavLink to='/kitchen' activeClassName='activeCat'> {Menu._renderCategory('kitchen')}</NavLink>
                    </li>
                    <li className={menu('Item')}>
                        <NavLink to='/accesories' activeClassName='activeCat'> {Menu._renderCategory('accesories')}</NavLink>
                    </li>
                </ul>
            </div>

        )
    }
}
export default Menu;
