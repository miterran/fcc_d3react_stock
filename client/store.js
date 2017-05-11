import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import rangeButtonMenuReducer from './reducers/rangeButtonMenuReducer';
import stockListReducer from './reducers/stockListReducer';
import flashMessageReducer from './reducers/flashMessageReducer';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io.connect()
const socketIoMiddleware = createSocketIoMiddleware(socket, "io/");

const middleware = applyMiddleware(socketIoMiddleware, thunk, promise())
const allReducers = combineReducers({
	rangeButtonMenu: rangeButtonMenuReducer, stockList: stockListReducer, flashMessage: flashMessageReducer 
});
const store = createStore(allReducers, middleware)

export default store




