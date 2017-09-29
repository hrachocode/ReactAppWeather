var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
		return(
			<div>
				<Nav />
				<div className='row'>
					<div className='columns mediu-6 large-4 small-centered'>
						{props.children}
					</div>
				</div>
			</div>
		)
}

module.exports = Main;