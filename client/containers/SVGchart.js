import React from "react";
import { connect } from 'react-redux';
import * as d3 from 'd3'; 
import _ from 'lodash';
import moment from 'moment';


class SymbolBar extends React.Component{
  render() {
  		const color = this.props.color
  		const masterData = this.props.data

  		const stockBars = masterData.map(function(val, idx){
  			return (
  				<g key={val.symbol+idx}>
  					<rect 
	  					height='20' 
	  					width='60' 
	  					x={idx * 66} 
	  					y='0' 
	  					style={{fill: color(val.symbol) }}
  					></rect>
  					<text 
  					x={30 + (idx * 66)} 
  					y='15' 
  					textAnchor="middle" 
  					style={{'font-style': 'normal'}, {'font-variant-caps': 'normal'}, {'font-weight': 'normal'}, {'font-size': 12}, {'line-height': 'normal'}, {'font-family': 'sans-serif'}, {'fill': 'white'}}>{val.symbol}</text>
  				</g>
  			)
  		}.bind(this))
  	
        return(
        	<g transform='translate(100, 90)'>
        		{stockBars}
        	</g>
        );
    }
}

class AxisX extends React.Component{

  render() {
  		const ticks = this.props.ticks
  		const x = this.props.x
  		const y = this.props.y

		const axisBottom = d3.axisBottom(x)
					   .tickValues(x.domain().filter(function(d, i){
					   	return !(i%ticks)
					   }))

		d3.select(".x")
		   .attr('transform', 'translate(90, 560)')
		   .call(axisBottom)

        return(
          <g className="x axis"></g>
        );
    }
}

class AxisY extends React.Component{
  render() {
 		const x = this.props.x
  		const y = this.props.y

		const axisRight = d3.axisRight(y)
						  .tickFormat(function(d){
						  	return d.toFixed(2) + '%'
						  })
		    			  .tickPadding('40')

		 d3.select(".y")
		   .attr('transform', 'translate(900, 90)')
		   .call(axisRight)
		   .selectAll("text")
		   .style("text-anchor", "start");

        return(
          <g className="y axis"></g>
        );
    }
}

class Line extends React.Component{
	render() {
	  	return(
		  	  <g className="line" transform='translate(100, 90)'>
		  	 	{this.props.newline}
		  	  </g>
	  	);
	  }
}

class Circle extends React.Component{
	render() {
	  	return(
		  	  <g className="circle" transform='translate(100, 90)'>
		  	 	{this.props.newcircle}
		  	  </g>
	  	);
	  }
}


class SVGchart extends React.Component{
	constructor(props){
		super(props)
	    this.state = {
			tooltip: false,
			symbol: '',
			date: '',
			price: 0,
			close: 0,
			x: '',
			y: ''
	    };
	}
	onMouseOver(stock){
		this.setState({
			tooltip: true,
			symbol: stock.symbol,
			date: stock.date,
			price: stock.price,
			close: stock.close.toFixed(2),
			x: stock.x,
			y: stock.y
		})


	}
	onMouseOut(e){
		// this.setState({
		// 	tooltip: false,
		// })

	}
	render(){
		const dateFrom = this.props.dateDisplay.dateRange.dateFrom

		const masterData = _.map(this.props.stockList, function(val, key){
						let startPrice = [];
						return {
							symbol: key,
							values: _.compact(val.map(function(d, idx){
								if(moment(dateFrom).isBefore(d.date) || moment(dateFrom).isSame(d.date)){
									let date = new Date(moment(d.date).format('YYYY-MM-DD')).toISOString().substring(0, 10)
									startPrice.push(d.close)
									return {date: moment(date).format('MMM DD, YY'), price: Number(((1 - (startPrice[0] / d.close )) * 100).toFixed(2)), close: d.close }
								}
							}))
						}
					})

 		const dateArr = masterData.sort(function(a, b){
			return b.values.length - a.values.length
		})[0].values.map(function(val, idx){
			return val.date
		})

		const minPrice = d3.min(masterData, function(stocks){
			return d3.min(stocks.values.map(function(stock, idx){
				return stock.price
			}))
		})


		const maxPrice = d3.max(masterData, function(stocks){
			return d3.max(stocks.values.map(function(stock){
				return stock.price
			}))
		})

		const color = d3.scaleOrdinal(d3.schemeCategory10);

		color.domain(masterData.map(function(stock){ 
			return stock.symbol; 
		}));

		const x = d3.scaleBand()
				  .domain(dateArr)
				  .range([0, 800])

		const y = d3.scaleLinear()
				  .domain([minPrice, maxPrice])
				  .range([450, 0])

		const line = d3.line()
		.x(function(data){
			return x(data.date)
		})
		.y(function(data, idx){
			return y(data.price)
		});
	
		const newline = _.map(masterData, function(val, idx){
			return (
				<path key={idx+'line'} d={line(val.values)} style={{stroke: color(val.symbol)}}></path>
			)
		})


		const newcircle = masterData.map(function(stock){
			return stock.values.map(function(val, idx){
				let tips = {
					symbol: stock.symbol,
					date: val.date,
					price: val.price,
					close: val.close,
					x: x(val.date),
					y: y(val.price)
				}
				return (
						<circle 
							className='dot'
							key={idx+val.date} 
							cx={x(val.date)} 
							cy={y(val.price)} 
							r='4' 
							style={{'fill': color(stock.symbol)}} 
							onMouseOver={() => this.onMouseOver(tips)}
							onMouseOut={() => this.onMouseOut()}
						>
					</circle>
				)
			}.bind(this))
		}.bind(this))

		return(
			<div className="chart">
				<svg width={980} height={600}>
					<g transform="translate(0,0)">
						{this.state.tooltip && 
							<g transform='translate(100, 90)'>
								<g transform='translate(0, 50)'>
								<text x='0' y='0' textAnchor="end" >{this.state.symbol}</text>
								<text x='0' y='20' textAnchor="end" >{this.state.date}</text>
								<text x='0' y='40' textAnchor="end" >{'$' + this.state.close}</text>
								</g>
							</g>
						}
						<AxisX dateArr={dateArr} toDate={this.props.dateDisplay.dateRange.dateFrom} ticks={this.props.dateDisplay.dateRange.ticks} x={x} y={y}/>
						<AxisY minPrice={minPrice} maxPrice={maxPrice} x={x} y={y}/>
						<Line newline={newline} />
						<Circle newcircle={newcircle} />
						<SymbolBar data={masterData} color={color}/>
					</g>
				</svg>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		dateDisplay: state.rangeButtonMenu,
		stockList: state.stockList
	}
}

export default connect(mapStateToProps, null)(SVGchart)


