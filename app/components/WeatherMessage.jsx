var React = require('react');

var WeatherMessage = (props) => {
	var {location, temp} = props;
	return(
		<div>
			<h5 className='text-centered'>Weather in {location} is {temp} by Celcius</h5>
		</div>
	)
}

module.exports = WeatherMessage;