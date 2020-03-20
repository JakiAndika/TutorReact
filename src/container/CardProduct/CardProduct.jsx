import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'Jaki'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg" alt="Bebek Goreng" />
                </div>
                <p className="product-title">Daging Bebek Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp. 410,000</p>
                <div className="couter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus} >+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;