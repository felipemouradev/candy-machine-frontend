import {UPDATE_DROP_COIN, REMOVE_ALL_COINS} from './types';

export const updateDropCoin = (props) => {
    console.log("[updateDropCoin] dispatch", props);
    return dispatch => {
        console.log("[updateDropCoin] dispatch 1", props);
        dispatch({
            type: UPDATE_DROP_COIN,
            payload: props
        });
    }
};

export const removeAllCoins = () => {

    return dispatch => {
        dispatch({
            type: REMOVE_ALL_COINS
        });
    }
};
