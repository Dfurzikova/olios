import React, { Component } from 'react';
import './Slider.scss';
import { cn } from '@bem-react/classname';
const slider = cn('Slider');

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    currentSlide:  `url('/assets/background-1.jpg')`
                },
                {
                    currentSlide: `url('/assets/background-2.jpg')`
                }
            ],
            active: 0,
            max: 0
        };
        this.state.max = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);

    }
    componentDidMount() {
        this.interval = setInterval(() => this.intervalBetweenSlides(), 4000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    intervalBetweenSlides() {

        if (this.state.active === this.state.max - 1) {

            this.setState({
                active: 0
            })

        } else {

            this.state.active++;
        }

        this.setState({
            active: this.state.active
        });

    }
    dots(index, event) {

        this.setState({
            active: index
        });
    }

    isActive(value) {
        if (this.state.active !== value) {
            return '';
        }
        if (this.state.active === value) {
            return 'Dots_active';
        }
    }
    setSliderStyles() {

        const transition = this.state.active * - 100;

        return {
            width: (this.state.slides.length * 100) + 'vw',
            transform: 'translateX(' + transition + 'vw)'
        }
    }

    renderSlides() {

        return this.state.slides.map((item, index) => (

            <div
                className={slider('EachSlide')}
                key={index}
                style={{ backgroundImage: item.currentSlide }}>
            </div>
        )
        );
    }

    renderDots() {

        return this.state.slides.map((item, index) => (

            <li
                className={this.isActive(index) + ' Dots'}
                key={index}
                ref='dots'
                onClick={this.dots.bind(this, index)} >
                <a>&#9679;</a>
            </li>
        )
        );
    }

    render() {
        return (

            <div className={slider()} >
                {this.props.children}
                <div
                    className={slider('Wrapper')}
                    style={this.setSliderStyles()}>
                    {this.renderSlides()}
                </div>

                <ul className={slider('DotsContainer')}>
                    {this.renderDots()}
                </ul>

            </div>
        )
    }
}
export default Slider;
