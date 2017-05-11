// import axios from 'axios';

// export const changethis = (button) => {
// 	return {
// 		type: "SELECT_RANGE_BUTTON", payload: button
// 	}
// }

// export const selectRangeButton = () => {
// 	return dispatch => {
// 		dispatch(changethis('button4'));
// 		dispatch(changethis('button3'));
// 	}
// }

export const addStockToServerIo = (stockSymbol) => {
	return {
		type: "io/addStockToServerIO", payload: stockSymbol
	}
}

export const removeStockFromServerIo = (stockSymbol) => {
	return {
		type:'io/removeStockFromServerIO', payload: stockSymbol
	}
}

export const removeStockFromListAlert = (stockSymbol) => {
	return {
		type:'REMOVING_STOCK_FROM_LIST', payload: stockSymbol
	}
}

export function syncStockListFromServerIo(){
	return {
		type: 'io/syncStockListFromServerIo'
	}
}



// export const syncStockList = () => {
// 	return {
// 		type: "SYNC_STOCK_LIST", payload: axios.get('/server-stock-list').then(function(response){
// 			return response.data.stockList
// 		})
// 	}
// }

