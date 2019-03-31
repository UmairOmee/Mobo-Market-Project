import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
            case LOGOUT_USER:
            return {...state }
            // case "ADD_USER":
            // return [ action.payload, ...state ]
            // case 'REMOVE_USER':
            // return state.filter(({ _id }) => _id !== action.id);
        default:
            return state;
    }
}