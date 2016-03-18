var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <a href="./#/"> main </a>
        <a href="./#/home"> home </a>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
