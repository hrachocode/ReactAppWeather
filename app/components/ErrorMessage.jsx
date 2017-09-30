var React = require('react');

var ErrorMessage = React.createClass({
  getDefaultProps: function(){
    return {
      title: "Error"
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#errorModal'));
    modal.open();
  },
	render: function(){
    var {title, message} = this.props;
		return (
				<div id="errorModal" className='reveal tiny text-center' data-reveal=''>
					<h4>{title}</h4>
					<p>{message}!</p>
					<p>
						<button className='button hollow' data-close=''>
							Close
						</button>
					</p>
				</div>
			)
    }
});

module.exports = ErrorMessage;