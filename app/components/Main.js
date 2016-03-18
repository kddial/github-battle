var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <a href="./#/"> main </a>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
