
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Product.scss';
import './../Cost.scss';
import './../Quantity.scss';
import './../Button/Button.scss'
import data from '../../data.json'

const product = cn('Product');
const content = cn('Content');
const cost = cn('Cost');
const quantity = cn('Quantity');
const button = cn('Button')

const productsData = data.products;

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productQuantity: 1
        }
        this.quantityChange = this.quantityChange.bind(this);
    }

    renderProduct() {
        const productData = productsData.filter((item) => {
            return item.article === this.props.match.params.article
        })
        const currentProduct = productData[0];

        return (
            <div className={product('', ['Content-Product'])}>
                <img src={currentProduct.fullImage} className={product('Image')} />
                <div className={product('Info')}>
                    <h1 className={product('Title')}>{currentProduct.title.toUpperCase()}</h1>
                    <h2 className={product('Category')}>&nbsp;-&nbsp;{currentProduct.type.toUpperCase()}</h2>
                    <div className={product('Description')}>{currentProduct.description} </div>

                    <div className={product('OrderBlock')}>
                    {this.renderCost(currentProduct)}
                    {this.renderQuantity()}
                    </div>

                </div>
            </div>
        )
    }
    renderCost(currentProduct) {
        if (currentProduct.price === currentProduct.currentPrice) {
            return (
                <div className={cost('', ['Product-Cost'])}>
                    <span className={cost('Title')}>COST</span>
                    <div className={cost('Price')}> {currentProduct.currentPrice}</div>
                </div>
            )
        } else {
            return (
                <div className={cost('', ['Product-Cost'])}>
                    <span className={cost('Title')} >COST</span>
                    <div className={cost('Price')} >{currentProduct.currentPrice}</div>
                    <div className={cost('PriceStrikeout')}>{currentProduct.price}</div>
                </div>
            )
        }

    }
    renderQuantity() {
        return (
            <form className={quantity('', ['Product-Quantity'])}>
            <div className={quantity('Block')}>
                <span className={quantity('Title')} >QUANTITY</span>
                <select className={quantity('Select')} style={ { backgroundImage: 'url(/assets/down.png)'}} value={this.state.productQuantity} onChange={this.quantityChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                </div>
                <input className={button('', ['Button_color', 'Quantity-Button'])} type="submit" value="ADD TO CARD" />
            </form>
        )
    }
    quantityChange(event) {
        this.setState({ productQuantity: event.target.value });
    }

    render() {

        return (
            <div className={content()}>
                <div className={content('Wrapper')}>
                    {this.renderProduct()}
                </div>

            </div>
        )
    }
}
export default Product;
