let defaultState ={
    selectedItems:{
        items:[],
        restaurantName:''

    }
}

export default function cartReducer(state=defaultState,action){
    switch(action.type){
        case 'ADD_TO_CART':
            let new_state={...state};
            new_state.selectedItems ={ 
                items:[...items,action.payload],
                restaurantName:action.payload.restaurantName
            }
            return new_state;
        
        default:
            return state;

    }

}