import {UPDATE_DROP_COIN, REMOVE_ALL_COINS} from './types';

const initialState = {
    coins: [],
    results: [],
    candySelected: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DROP_COIN:
            state.coins.push(action.payload);
            return state;

        case REMOVE_ALL_COINS:
            let newState = {...state};
            newState.coins = [];
            newState.candySelected = [];
            newState.results = [];
            return {...newState};
        default:
            return state;
    }
}
