import moment from 'moment';

const initialState = {
    '...': [{date: new Date(moment().subtract(1, 'months').calendar()).toISOString().substring(0, 10), close: 100}]
}

const stockListReducer = (state = initialState, action) => {
    switch(action.type){
        // case "io/addStockToServerIO": 
        //     state = [...state, action.payload]
        //     break;
        // case "io/removeStockFromServerIO":
        //     state = state.filter(stock => stock !== action.payload)
        //     break;
        case "SYNC_STOCK_LIST":
            // console.log(action.payload)
            state = action.payload
            break
        // case "SYNC_STOCK_LIST_FULFILLED":
        // 	state = action.payload
        // 	break
    }
    return state
}

export default stockListReducer



