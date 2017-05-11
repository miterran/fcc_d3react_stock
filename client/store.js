import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from "redux-promise-middleware"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rangeButtonMenuReducer from './reducers/rangeButtonMenuReducer';
import stockListReducer from './reducers/stockListReducer';
import flashMessageReducer from './reducers/flashMessageReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io.connect()
const socketIoMiddleware = createSocketIoMiddleware(socket, "io/");

const middleware = applyMiddleware(socketIoMiddleware, logger, thunk, promise())
const allReducers = combineReducers({
	rangeButtonMenu: rangeButtonMenuReducer, stockList: stockListReducer, flashMessage: flashMessageReducer 
});
const store = createStore(allReducers, composeWithDevTools(middleware))

export default store




