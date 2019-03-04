import React, { Component } from 'react';
import './SearchInput.scss';
import { cn } from '@bem-react/classname';
// import cross from '../../assets/cross.svg'
import Button from '../Button/Button'

const searchinput = cn('SearchInput');

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.inputHandler = this.inputHandler.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    inputHandler(e) {
        this.setState({ value: e.target.value.toUpperCase() });
    }
    clearInput(){
        this.setState({ value: '' });
    }

    render() {
        return (
            <React.Fragment>
                <input className={searchinput()} type="text" value={this.state.value} onChange={this.inputHandler} />
                <Button onClick={this.clearInput} className={searchinput('Button', ['Button_icon'])} backgroundImage={'/assets/cross.svg'} />
            </React.Fragment>
        )
    }
}
export default SearchInput;
