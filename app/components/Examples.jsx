var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
		return(
		<div>
			<h1 className='page-title text-centered'>Hello from Examples</h1>
			<p>Here are a few examples:</p>
			<ol>
				<li><Link to='/?location=yerevan'>Yerevan, YVN</Link></li>
				<li><Link to='/?location=rio'>Rio, Brazil</Link></li>
			</ol>
		</div>
	)
}

module.exports = Examples;