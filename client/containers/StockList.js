import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeStockFromServerIo, removeStockFromListAlert } from '../actions/stockListActions'
import { removeFlashMessage, turnOnLoading } from '../actions/removeFlashMessageActions';

class StockList extends React.Component{
	removeStock(e){
		if(Object.keys(this.props.stockList).length > 1){
			this.props.turnOnLoading();
			this.props.removeStockFromServerIo(e.target.name);
			this.props.removeStockFromListAlert(e.target.name)
		}
	}
	render(){
		const stocks = _.map(this.props.stockList, function(val, key){
	    	return( 
	    		<li key={key}>
	    			<div className='well well-sm'>{key}
	    				<button 
	    					className='pull-right removeStockBtn' 
	    					name={key} 
	    					style={{border: '0', background: 'none', marginTop: -2}} 
	    					disabled={this.props.flashMessage.isLoading}
	    					onClick={this.removeStock.bind(this)}>&times;
	    				</button>
	    			</div>
	    		</li> 
	    	)
		}.bind(this))
		return(
			<ul className='list-inline stockList'>
				{stocks}
			</ul>
		)
	}
}

// StockList.propTypes = {
// 	removeStockFromServerIo: PropTypes.func.isRequired,
// 	stockList: PropTypes.array
// };

const mapStateToProps = (state) => {
	return {
		stockList: state.stockList,
		flashMessage: state.flashMessage
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ removeStockFromServerIo: removeStockFromServerIo, turnOnLoading: turnOnLoading, removeStockFromListAlert: removeStockFromListAlert }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(StockList)