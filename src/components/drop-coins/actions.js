import {UPDATE_DROP_COIN, REMOVE_ALL_COINS} from './types';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8000';

export const updateDropCoin = (props) => {
    return dispatch => {
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

// export const setCandySelected = (idCandy) => {
//     return dispatch => {
//         dispatch({
//             type: SET_IDCANDY,
//             payload: idCandy
//         });
//     }
// };

// export const purchaseCandy = async (candys, valuePayment) => {
//     let execute = await axios.post(BASE_URL + '/purchase-candy', {candys,valuePayment});
//     return dispatch => {
//         dispatch({
//             type: REMOVE_ALL_COINS
//         });
//     }
// };

