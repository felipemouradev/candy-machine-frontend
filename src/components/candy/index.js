import './style.css';
import React, {Component} from 'react';


class Candy extends Component {

    normalizeCoins = () => {
        let {price} = this.props;
        let normalizedCoin = "";
        if (price === 1) {
            normalizedCoin = price + " real";
        } else if (price > 1) {
            normalizedCoin = price + " reais";
        } else {
            normalizedCoin = String(price).replace("0.", "").padEnd(2,'0') + " centavos";
        }
        return normalizedCoin;
    };

    render = () => {
        return (
            <div className="candy">
                <img src={this.props.image} alt=""/>
                <span>{this.normalizeCoins()}</span>
            </div>
        );
    }
}

export default Candy;