import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Hamburger.scss';
import Menu from '../Menu/Menu'
const hamburger = cn('Hamburger');

class Hamburger extends Component {
    constructor(props){
        super(props)
        this.state={
            menuActive: false
        }
        this.gamburgerClick = this.gamburgerClick.bind(this)
    }
    gamburgerClick(){
        if (this.state.menuActive) {

            this.state.className = ""

        } else {
            this.state.className = "active"
        }

        this.setState({
            menuActive: !this.state.menuActive,
        })

    }

    renderMenu(){
        if(this.state.menuActive){
            return (
                <Menu/>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className={hamburger('', [this.state.className])}  onClick={this.gamburgerClick} >

               <ul className={hamburger('Lines')}>
                   <li className={hamburger('Line', ['Hamburger-Line_1'])}></li>
                   <li className={hamburger('Line', ['Hamburger-Line_2'])}></li>
                   <li className={hamburger('Line', ['Hamburger-Line_3'])}></li>
               </ul>
            </div>
            {this.renderMenu()}
            </React.Fragment>
        )
    }
}
export default Hamburger;
