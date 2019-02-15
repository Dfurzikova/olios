
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Content.scss';

const content = cn('Content');

class Content extends Component {
    render() {
        return (
            <div className={content()}>
                <h1 className={content('Title')}>PRODUCTS</h1>

            </div>
        )
    }
}
export default Content;
