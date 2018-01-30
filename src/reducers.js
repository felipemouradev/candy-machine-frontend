import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import defaultReducer from './containers/home/default-reducer';

export default combineReducers({
    router: routerReducer,
    defaultReducer: defaultReducer
})
