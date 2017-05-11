import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../views/style.scss';
import { Jumbotron, ButtonToolbar, Button, Form, Row, Col, FormControl } from 'react-bootstrap';
import RangeButtonMenu from '../containers/RangeButtonMenu';
import DateRange from '../compoments/DateRange';
import SVGchart from '../containers/SVGchart';
import AddStockBar from '../containers/AddStockBar';
import StockList from '../containers/StockList';
import { syncStockListFromServerIo } from '../actions/stockListActions'
import { bindActionCreators } from 'redux';

class App extends React.Component{
	componentWillMount(){
		this.props.syncStockListFromServerIo();
	}
	compomentDidMount(){
	}
	render(){
		return(
			<div className="container">
				<Jumbotron>
 					<Row><RangeButtonMenu /></Row>
 					<Row className='displayDateRange'><DateRange dateRange={this.props.dateDisplay.dateRange}/></Row>
 					<Row><SVGchart/></Row>
 					<Row><AddStockBar /></Row>
 					<Row><StockList /></Row>
				</Jumbotron>
			</div>
		)
	}
}

App.propTypes = {
	syncStockListFromServerIo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		dateDisplay: state.rangeButtonMenu,
		stockList: state.stockList
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ syncStockListFromServerIo: syncStockListFromServerIo }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)



