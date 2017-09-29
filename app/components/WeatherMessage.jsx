var React = require('react');

var WeatherMessage = (props) => {
	var {location, temp} = props;
	return(
		<div>
			<h3>Weather in {location} is {temp} by Celcius</h3>
		</div>
	)
}

module.exports = WeatherMessage;