import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStockToServerIo } from '../actions/stockListActions'
import { removeFlashMessage, turnOnLoading } from '../actions/removeFlashMessageActions';

class AddStockBar extends React.Component{
	constructor(){
		super()
	    this.state = {
			quote: ''
	    };
	}
	addStockInput(e){
		if(/^[a-zA-Z]*$/g.test(e.target.value) && this.state.quote.length < 5){
			this.setState({...this.state, quote: e.target.value.toUpperCase()})
		}else{
			this.setState({...this.state, quote: this.state.quote.substr(0, 4)})
		}
	}
	submitQuote(e){
		e.preventDefault();
		this.props.turnOnLoading();
		this.props.addStockToServerIo(this.state.quote)
		this.setState({...this.state, quote: ''})
	}
	removeFlashMessage(){
		this.props.removeFlashMessage();
	}
	render(){
		return(
			<div>
			   <Form inline className="addStock"  onSubmit={this.submitQuote.bind(this)}>
			   	<FormControl type="text" placeholder="Stock code / 'AAPL'" value={this.state.quote} onChange={this.addStockInput.bind(this)} />&nbsp;&nbsp;<Button type='submit' disabled={this.props.flashMessage.isLoading}>Add</Button>
			   </Form>
			   {this.props.flashMessage.errors &&  <div className='alert alert-danger' style={{marginTop: 10}} onClick={this.removeFlashMessage.bind(this)}>{this.props.flashMessage.errors}</div>}
			   {this.props.flashMessage.alert && <div className='alert alert-warning' style={{marginTop: 10}} onClick={this.removeFlashMessage.bind(this)}>{this.props.flashMessage.alert}</div>}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flashMessage: state.flashMessage
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ addStockToServerIo: addStockToServerIo, removeFlashMessage: removeFlashMessage, turnOnLoading: turnOnLoading }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddStockBar)





