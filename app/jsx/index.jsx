var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Examples = require('Examples');
var Weather = require('Weather');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="About" component={About}></Route>
			<Route path="Examples" component={Examples}></Route>
			<IndexRoute component={Weather} />
		</Route>
	</Router>,
	document.getElementById('app')	
);