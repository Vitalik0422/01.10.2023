import {AUTH_SUCCESS} from './types'

export const initialState = {
    status:0
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case AUTH_SUCCESS:
        return { ...state, status: action.payload.status} 
        break;    
    }

    return state;
}

export default reducer;