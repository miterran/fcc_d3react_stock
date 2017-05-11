import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ButtonToolbar, Button, Form } from 'react-bootstrap';
import { selectRangeButton, customDateSubmit } from '../actions/rangeButtonMenuAction'
import DatePicker from "react-bootstrap-date-picker";
import moment from 'moment';

class RangeButtonMenu extends React.Component {
	constructor(){
		super()
	    this.state = {
			customDateRange: {
				dateFrom: '',
				dateTo: ''
			},
		    buttons: {
		        button1: { content: '1M', style: 'primary', disabled: true},
		        button2: { content: '3M', style: 'default', disabled: false},
		        button3: { content: '6M', style: 'default', disabled: false},
		        button4: { content: '1Y', style: 'default', disabled: false},
		        button5: { content: '2Y', style: 'default', disabled: false},
		        button6: { content: 'YTD', style: 'default', disabled: false},
		        button7: { content: 'CUSTOM', style: 'default', disabled: false}
		    }
	    };
	}
	buttonSelect(e){
		let stateUpdate = Object.assign({}, this.state);
		_.map(stateUpdate.buttons, function(val, key){
			if(key == e.target.name){
				stateUpdate.buttons[key].style = 'primary';
				stateUpdate.buttons[key].disabled = true;
			}else{
				stateUpdate.buttons[key].style = 'default';
				stateUpdate.buttons[key].disabled = false;
			}
		}.bind(this))
		this.setState(stateUpdate);
		this.props.selectRangeButton(e.target.name)
	}
	customDateFrom(value, formattedValue){
		let stateUpdate = Object.assign({}, this.state);
		if(moment(value).isAfter(moment(moment().subtract(2, 'years').calendar()).format())){
			stateUpdate.customDateRange.dateFrom = value;
		}else{
			stateUpdate.customDateRange.dateFrom = ''
		}
		this.setState(stateUpdate);
	}
	customDateTo(value, formattedValue){
 		let stateUpdate = Object.assign({}, this.state);
		if(moment(value).isBefore(moment().format()) || moment(value).isSame(moment(), 'day')){
			stateUpdate.customDateRange.dateTo = value;
		}else{
			stateUpdate.customDateRange.dateTo = ''
		}
		this.setState(stateUpdate);
	}
	customDateSubmit(e){
		e.preventDefault();
		this.props.customDateSubmit(this.state.customDateRange)
	}
	render(){
    	const buttonLists = _.map(this.state.buttons, function(val, key){
    		return ( <Button key={key} name={key} bsStyle={val.style} onClick={this.buttonSelect.bind(this)} disabled={val.disabled}>{val.content}</Button> )
    	}.bind(this))
		return (
			<div>
				<ButtonToolbar className='inLineControl'>
					{buttonLists}
				</ButtonToolbar>
		            {this.state.buttons.button7.disabled == true && 
					    <Form inline className='inLineControl' onSubmit={this.customDateSubmit.bind(this)} >
					    	&nbsp;&nbsp;<DatePicker value={this.state.customDateRange.dateFrom} onChange={this.customDateFrom.bind(this)} placeholder='Begin Date' />
					    	&nbsp;&nbsp;<DatePicker value={this.state.customDateRange.dateTo} onChange={this.customDateTo.bind(this)} placeholder='End Date' />
					    	&nbsp;&nbsp;<Button bsStyle="success" type="submit">Submit</Button>
					    </Form>
		            }
			</div>
		)
	}
}


RangeButtonMenu.propTypes = {
	selectRangeButton: PropTypes.func.isRequired,
	customDateSubmit: PropTypes.func.isRequired
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectRangeButton: selectRangeButton, customDateSubmit: customDateSubmit }, dispatch)
}

export default connect(null, matchDispatchToProps)(RangeButtonMenu)
