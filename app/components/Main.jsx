var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
	render: function(){
		return(
			<div>
			<h1>Weather Webcast</h1>
			<Nav />
			{this.props.children}
			</div>
		)
	}
})

module.exports = Main;