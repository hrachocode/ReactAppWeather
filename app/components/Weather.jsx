var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorMessage = require('ErrorMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false,
		}
	},

	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		})

		openWeatherMap.getTemp(location).then(
			function(temp){
				that.setState({
					isLoading: false,
					location: location,
					temp: temp
				})
			},function(e){		
				that.setState({
					isLoading: false,
					errorMessage: e
				})
			}
		)
	},
	
	componentDidMount: function(){
		var location = this.props.location.query.location;
	
		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;
	
		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	render: function(){

		var {isLoading, location, temp, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading){
			  return <h3 className='text-centered'>Fetching data...</h3>	
			}else if(temp && location){
			  return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string'){
				return (
					<ErrorMessage message={errorMessage}/>
				)
			}
		}

		return(
			<div>
				<h1 className='page-title text-centered'>Todays Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
})

module.exports = Weather;