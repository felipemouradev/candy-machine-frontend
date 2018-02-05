import {UPDATE_DROP_COIN, REMOVE_ALL_COINS} from './types';

const initialState = {
    coins: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DROP_COIN:
            state.coins.push(action.payload);
            return state;
        case REMOVE_ALL_COINS:
            let newState = {...state};
            newState.coins = [];
            return {...newState};
        default:
            return state;
    }
}
