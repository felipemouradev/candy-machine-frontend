import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Candy from './../../components/candy';
import Coin from './../../components/coin';
import DropCoins from './../../components/drop-coins';

import {removeAllCoins} from './../../components/drop-coins/actions';
import './style.css';

class CandyMachine extends Component {
    render = () => {
        return (
            <div className="wrapper-machine">
                <h3>Selecione o doce a sua escolha: </h3>
                <div className="machine">
                    <div className="candies">
                        <Candy price={0.75} image="./images/kitkat.png"/>
                        <Candy price={0.80} image="./images/diamante_negro.png"/>
                        <Candy price={1} image="./images/suflair.png"/>
                    </div>
                </div>
                <h3 style={{textAlign: "center"}}>Escolha a combinação de moedas que preferir para pagar: </h3>
                <div className="coins">
                    <Coin value={0.05} image="./images/05centavos.png"/>
                    <Coin value={0.10} image="./images/10centavos.png"/>
                    <Coin value={0.25} image="./images/25centavos.png"/>
                    <Coin value={0.50} image="./images/50centavos.png"/>
                    <Coin value={1} image="./images/1real.png"/>
                </div>
                <DropCoins />
                <div className="result">

                </div>
                <div className="buttonSection">
                    <a className="button makePaymentLeft">Comprar</a>
                    <a onClick={()=>this.props.removeAllCoins()} className="button makePaymentRight">Limpar</a>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    count: state.candy.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({removeAllCoins}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandyMachine)
