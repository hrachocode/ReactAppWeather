var React = require('react');

var About = (props) => {
	return (
			<div>
				<h1 className='text-centered'>About This Applcation</h1>
				<p>This is Complete react Web Application</p>
				<p>Some tool I use</p>
				<ul>
					<li><a href="https://facebook.github.io/react">React</a> - a JS Fraemwork I use</li>
					<li><a href="https://openweathermap.org">OpenWeatherMap</a> - an API call I made</li>
				</ul>
			</div>
		)
}

module.exports = About;