import * as actionTypes from './actions';
const initialState = {};

const RootReducer = (state=initialState, action)=>{

    switch(action.type){
    
        case actionTypes.STORE_ROLES:
            
            return {
                ...state, 
                'roles': action.value
            }
        default: return state;
    }
}

export default RootReducer;