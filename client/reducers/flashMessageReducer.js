const initialState = {
	errors: '',
	alert: '',
	isLoading: false
}

const flashMessageReducer = (state = initialState, action) => {
    switch(action.type){
    	case 'REMOVE_FLASH_MESSAGE':
    		state = {...state, errors: '', alert: ''};
    		break;
    	case 'REMOVE_ERROR_MESSAGE':
    		state = {...state, errors: ''};
    		break;
    	case 'REMOVE_ALERT_MESSAGE':
    		state = {...state, alert: ''};
    		break;
    	case 'REMOVING_STOCK_FROM_LIST':
    		state = {...state, alert: 'Removing ' + action.payload}
    		break;
        case "ERROR":
            state = {...state, errors: action.payload}
            break;
        case 'IS_LOADING':
        	state = {...state, isLoading: true}
        	break;
        case 'IS_LOADED':
        	state = {...state, isLoading: false}
        	break;
    }
    return state
}

export default flashMessageReducer



