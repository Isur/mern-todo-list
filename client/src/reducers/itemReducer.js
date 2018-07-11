import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/types';

const initialState = {
    items: [],
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
        return{
            ...state,
            items: action.payload,
        }
        case DELETE_ITEM:
        return{
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
        }
        case ADD_ITEM:
        return{
            ...state,
            items: [action.payload, ...state.items].sort((a,b) => {return new Date(b.date) - new Date(a.date)})
        }
        case UPDATE_ITEM:
        const b = [];
        console.log([...state.items]);
        [...state.items].forEach((e) => {
            if(e._id !== action.payload._id){
                b.push(e);
            }
        });
        b.push(action.payload);
        b.sort((a,b) => {return new Date(b.date) - new Date(a.date)});
        return{
            ...state,
            items:[...b]
        }
        default:
        return state;
    }
}