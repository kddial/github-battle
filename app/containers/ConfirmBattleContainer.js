var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log("getInitialState");
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function() {
    console.log("componentWillMount");
  },
  componentDidMount: function() {
    console.log("componentDidMount");
    // loaded after the component is rendered
    var query = this.props.location.query;
    // Fetch user's info from GitHub then update the state
    console.log("QUERY", query);
  },
  componentWillReceiveProps: function() {
    console.log("componentWillReceiveProps");
  },
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },
  render: function() {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />

    );

  }

});

module.exports = ConfirmBattleContainer;