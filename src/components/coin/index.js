import './style.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DragSource} from 'react-dnd';
// import {bindActionCreators} from 'redux';


const Types = {
    CARD: 'card'
};

const cardSource = {
    beginDrag(props) {
        const item = {id: props.id};
        console.log("[beginDrag] item: ", item);
        console.log("[beginDrag] props: ", props);
        return props;
    },

    endDrag(props, monitor) {
        if (!monitor.didDrop()) {
            return;
        }
        const item = monitor.getItem();
        console.log("[endDrag] item: ", item);
        console.log("[endDrag] props: ", props);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Coin extends Component {
    getImage = () => {
        switch (this.props.value) {
            case 0.05:
                return './images/05centavos.png';
            case 0.10:
                return './images/10centavos.png';
            case 0.25:
                return './images/25centavos.png';
            case 0.50:
                return './images/50centavos.png';
            case 1:
                return './images/1real.png';
            default:
                return './images/1real.png';

        }
    };

    render = () => {
        return this.props.connectDragSource(
            <div className="coin" >
                <img src={this.getImage()} alt=""/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    coins: state.coins
});

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps)(DragSource(Types.CARD, cardSource, collect)(Coin));
