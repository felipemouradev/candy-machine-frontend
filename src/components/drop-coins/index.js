import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import _ from 'lodash';
import Coin from './../coin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateDropCoin} from './actions';
import './style.css';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    CARD: 'card'
};

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const CoinTarget = {

    hover(props, monitor) {
        const item = monitor.getItem();
        console.log("[hover] props: ", props);
        console.log("[hover] item: ", item);
    },

    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            return;
        }
        const item = monitor.getItem();
        props.updateDropCoin(item);
        // props.updateDropCoin(item);
        console.log("[drop] props: ", props);
        console.log("[drop] item: ", item);
        console.log("[drop] component: ", component);
        return {moved: true};
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({shallow: true}),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType(),
    };
}

class DropCoins extends Component {

    renderCoinsDropped = () => {
        let coinsToRender = [];
        console.log("this.props.coins: ", this.props.coins.coins);
        if (this.props.coins.coins && !_.isEmpty(this.props.coins.coins)) {
            _.each(this.props.coins.coins, (coin, key) => {
                coinsToRender.push(<Coin key={key} {...coin} />);
            });
        }
        console.log(coinsToRender);
        return <div className="coins">{coinsToRender}</div>;
    };

    render = () => {
        return this.props.connectDropTarget(
            <div className="dropCoins">
                Arraste as moedas para fazer o pagamento aqui!
                {this.renderCoinsDropped()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    coins: state.coins
});

const mapDispatchToProps = dispatch => bindActionCreators({updateDropCoin}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropTarget(Types.CARD, CoinTarget, collect)(DropCoins));