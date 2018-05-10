import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CandyMachine from '../candy-machine';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';


class App extends Component {
    render = () => {
        return (<div>
            <main>
                <Route exact path="/" component={CandyMachine}/>
            </main>
        </div>)
    };
}

export default DragDropContext(HTML5Backend)(App);
