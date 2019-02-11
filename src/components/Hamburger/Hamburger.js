import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Hamburger.scss';
const hamburger = cn('Hamburger');

class Hamburger extends Component {
    render() {
        return (
            <div className={hamburger()}>
               <ul className={hamburger('Lines')}>
                   <li className={hamburger('Line')}></li>
                   <li className={hamburger('Line')}></li>
                   <li className={hamburger('Line')}></li>
               </ul>
            </div>
        )
    }
}
export default Hamburger;
