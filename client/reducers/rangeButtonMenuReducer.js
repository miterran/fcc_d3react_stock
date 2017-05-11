import moment from 'moment';

const initialState = {
    today: new Date(moment().format()).toISOString().substring(0, 10),
    dateRange: {
        dateFrom: new Date(moment().subtract(1, 'months').calendar()).toISOString().substring(0, 10),
        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
        ticks: 2
    },
    customDateRange: {
        dateFrom: '',
        dateTo: ''
    },
}

const rangeButtonMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case "SELECT_RANGE_BUTTON": 
            switch(action.payload){
                case 'button1':
                    state = { ...state, dateRange: {...state.dateRage,  
                        dateFrom: new Date(moment().subtract(1, 'months').calendar()).toISOString().substring(0, 10), 
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 2 } }
                    break;
                case 'button2':
                    state = { ...state, dateRange: {...state.dateRage, 
                        dateFrom: new Date(moment().subtract(3, 'months').calendar()).toISOString().substring(0, 10),  
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 6 } }
                    break;
                case 'button3':
                    state = { ...state, dateRange: {...state.dateRage, 
                        dateFrom: new Date(moment().subtract(6, 'months').calendar()).toISOString().substring(0, 10), 
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 12 } }
                    break;
                case 'button4':
                    state = { ...state, dateRange: {...state.dateRage,  
                        dateFrom: new Date(moment().subtract(1, 'year').calendar()).toISOString().substring(0, 10), 
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 24 } }
                    break;
                case 'button5':
                    state = { ...state, dateRange: {...state.dateRage, 
                        dateFrom: new Date(moment().subtract(2, 'year').calendar()).toISOString().substring(0, 10),  
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 48 } }
                    break;
                case 'button6':
                    state = { ...state, dateRange: {...state.dateRage, 
                        dateFrom: new Date(new Date().getFullYear()+'-01-01').toISOString().substring(0, 10), 
                        dateTo: new Date(moment().format()).toISOString().substring(0, 10),
                        ticks: 12 } }
                    break;
            }
            break;  

        case "CUSTOM_DATE":
            state = { ...state, dateRange: {...state.dateRage, dateFrom: action.payload.dateFrom, dateTo: action.payload.dateTo } }
            break;
    }
    return state
}

export default rangeButtonMenuReducer

