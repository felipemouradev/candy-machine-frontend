import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Candy from './../../components/candy';
import Coin from './../../components/coin';
import DropCoins from './../../components/drop-coins';
import _ from 'lodash';

import {removeAllCoins} from './../../components/drop-coins/actions';
import './style.css';

class CandyMachine extends Component {
    render = () => {
        return (
            <div className="wrapper-machine">
                <h3>Selecione o doce a sua escolha: </h3>
                <div className="machine">
                    <div className="candies">
                        <Candy price={0.75} idCandy="kitkat" image="./images/kitkat.png"/>
                        <Candy price={0.80} idCandy="dimante_negro" image="./images/diamante_negro.png"/>
                        <Candy price={1} iCandy="suflair" image="./images/suflair.png"/>
                    </div>
                </div>
                <h3 style={{textAlign: "center"}}>Escolha a combinação de moedas que preferir para pagar: </h3>
                <div className="coins">
                    <Coin value={0.05}/>
                    <Coin value={0.10}/>
                    <Coin value={0.25}/>
                    <Coin value={0.50}/>
                    <Coin value={1}/>
                </div>
                <DropCoins/>
                <div className="result">
                    {this.renderResult()}
                </div>
                <div className="buttonSection">
                    <a className="button makePaymentLeft">Comprar</a>
                    <a onClick={() => this.props.removeAllCoins()} className="button makePaymentRight">Limpar</a>
                </div>
            </div>
        );
    };

    renderResult = () => {
        if (this.props.results.error) {
            return <div className="errorMessage">{this.props.results.error}</div>;
        }
        let result = [];
        _.each(this.props.results.change, (result) => {
            result.push(<Coin value={result}/>);
        });
        return result;
    }
}

const mapStateToProps = state => ({
    count: state.candy.count,
    results: state.coins.results
});

const mapDispatchToProps = dispatch => bindActionCreators({removeAllCoins}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandyMachine)
