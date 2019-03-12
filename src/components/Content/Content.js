
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@bem-react/classname';
import './Content.scss';
import data from '../../data.json'

const content = cn('Content');
const card = cn('Card')

const productsData = data.products;

class Content extends Component {

    renderProducts() {
        const category = this.props.location.pathname.replace(/[^a-z]/g, '');

        const currentProducts = productsData.filter((item) => {
            return item.type === category;
        })


        return currentProducts.map((item, index) =>{


            return (
                <Link to={'/'+ `${item.type}` + '/' + `${item.article}`}  key={index} className={card('', ['Card_size_' + item.size])} >

                    <img className={card('Image')}  src={item.preview}/>
                    <div className={card('Info')}>
                        <div className={card('Title')}>{item.title.toUpperCase()}</div>
                        <div className={card('Description')}>{item.description}</div>
                        <div className={card('Price')}>{item.currentPrice}</div>
                    </div>
             </Link>

            )
        })

    }

    render() {

        return (
            <div className={content('', ['Content_theme_grey'])}>
            <div className={content('Wrapper')}>
                <h1 className={content('Title')}>PRODUCTS</h1>
                <div className={content('ProductCards')}>

                 {this.renderProducts()}
                </div>
            </div>
            </div>
        )
    }
}
export default Content;
