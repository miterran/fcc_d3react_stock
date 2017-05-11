import express from 'express';
import yahooFinance from 'yahoo-finance'
import bodyParser from 'body-parser';
var moment = require('moment');
import _ from 'lodash';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

let serverStockList = ['AAPL']

app.use('/js', express.static(__dirname + '/js'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stock', function(req, res){

	yahooFinance.historical({
	  symbols: serverStockList,
	  from: '2017-01-01',
	  to: '2017-05-01'
	}, function (err, quotes) {
		res.json(quotes)

	});

})

app.get('/*', function(req, res){
	res.render('../client/views/index')
})

io.sockets.on('connection', function(socket){

	socket.on('action', (action) => {
		switch(action.type){
			case 'io/syncStockListFromServerIo':
				updateStockObjFromYahoo(serverStockList);
				break;
			case 'io/removeStockFromServerIO':
				serverStockList = serverStockList.filter(stock => stock !== action.payload);
				updateStockObjFromYahoo(serverStockList);
				break;
  			case 'io/addStockToServerIO':
  				let duplicateStock = false;
  				serverStockList.map(function(val, key){
  					if(val == action.payload){
  						duplicateStock = true;
  						return;
  					}
  				})
  				if(duplicateStock == true){
  					io.sockets.emit('action', {type: 'ERROR', payload: action.payload + ' already existed'})
  					io.sockets.emit('action', {type: 'IS_LOADED'})
  					setTimeout(function(){ 
  						io.sockets.emit('action', {type: 'REMOVE_ERROR_MESSAGE'})
  					}, 4000);
  				}else{
	 				serverStockList.push(action.payload);
			  		updateStockObjFromYahoo(serverStockList, function(key){
			  			if(key){
			  				io.sockets.emit('action', {type: 'ERROR', payload: key + ' Not Found'})
			  				io.sockets.emit('action', {type: 'IS_LOADED'})
			  				serverStockList = serverStockList.filter(stock => stock !== key);
		  					setTimeout(function(){ 
		  						io.sockets.emit('action', {type: 'REMOVE_ERROR_MESSAGE'})
		  					}, 4000);
			  			}
			  		});
  				}
		  		break;
			default:
				return;
		}
	})

  	function updateStockObjFromYahoo(array, callback){
		yahooFinance.historical({
		  symbols: array,
		  from: new Date(moment().subtract(2, 'years').calendar()).toISOString().substring(0, 10),
		  to: new Date().toISOString().substring(0, 10)
		}, function (err, quotes) {
			var keys = Object.keys(quotes)
			var last = keys[keys.length - 1]
			if(quotes[last].length > 0){
				io.sockets.emit('action', {type: 'SYNC_STOCK_LIST', payload: quotes})
				io.sockets.emit('action', {type: 'IS_LOADED'})
				io.sockets.emit('action', {type: 'REMOVE_ALERT_MESSAGE'})
			}else{
				callback(last)
			}
		});
  	}
});


server.listen(port, function(){
	console.log('listening to port 3000')
})


