var React = require('react');
var {Link, IndexLink} = require('react-router');
// var Nav = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 			<IndexLink activeClassName="active" activeStyle={{fontSize: '21px'}} to="/">Get Weather</IndexLink><br/>
// 			<Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/About">About</Link><br/>
// 			<Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/Examples">Examples</Link><br/>
// 			</div>
// 		)
// 	}
// })

var Nav = (props) => {
		return(
			<div>
				<IndexLink activeClassName="active" activeStyle={{fontSize: '21px'}} to="/">Get Weather</IndexLink><br/>
				<Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/About">About</Link><br/>
				<Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/Examples">Examples</Link><br/>
			</div>
		)
}

module.exports = Nav;