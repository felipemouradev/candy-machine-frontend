import './style.css';
import React, {Component} from 'react';
import { DragSource } from 'react-dnd';

const Types = {
    CARD: 'card'
};

const cardSource = {
    beginDrag(props) {
        const item = { id: props.id };
        console.log("[beginDrag] item: ",item);
        console.log("[beginDrag] props: ",props);
        return props;
    },

    endDrag(props, monitor) {
        if (!monitor.didDrop()) {
            return;
        }
        const item = monitor.getItem();
        console.log("[endDrag] item: ",item);
        console.log("[endDrag] props: ",props);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}
class Coin extends Component {

    render = () => {
        return this.props.connectDragSource(
            <div className="coin">
                <img src={this.props.image} alt=""/>
            </div>
        );
    }
}

export default DragSource(Types.CARD, cardSource, collect)(Coin);