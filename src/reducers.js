import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import candyReducer from './containers/candy-machine/reducer';
import dropCoinReducer from './components/drop-coins/reducer';

export default combineReducers({
    router: routerReducer,
    candy: candyReducer,
    coins: dropCoinReducer
})
