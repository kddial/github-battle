var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    // invoked after the component is rendered
    // Fetch user's info from GitHub then update the state
    var query = this.props.location.query;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {

        // update state with fetched data
        this.setState({
          isLoading: false,
          playersInfo: players
        });
      }.bind(this)); // bind will set context of the function when it is invoked in the future
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playersInfo
      }
    })

  },
  render: function() {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />

    );

  }

});

module.exports = ConfirmBattleContainer;