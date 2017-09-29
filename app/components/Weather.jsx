var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
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
			isLoading: true
		})

		openWeatherMap.getTemp(location).then(
			function(temp){
				that.setState({
					isLoading: false,
					location: location,
					temp: temp
				})
			},function(errorMessage){				
				that.setState({
					isLoading: false,
					notFound: errorMessage
				})
			}
		)
	},

	render: function(){

		var {notFound, isLoading, location, temp} = this.state;

		function renderMessage() {
			if(isLoading){
			  return <h3>Fetching data...</h3>	
			}else if(temp && location){
			  return <WeatherMessage location={location} temp={temp}/>;
			}else if(notFound){
			  return <h3>{notFound}</h3>
			}
		}

		return(
			<div>
			<h2>Todays Weather</h2>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMessage()}
			</div>
		)
	}
})

module.exports = Weather;