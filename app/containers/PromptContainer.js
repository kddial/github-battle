var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(event) {
    this.setState({
      username: event.target.value
    });
  },
  handleSubmitUser: function(e) {
    // prevent the default action of submit to occur
    e.preventDefault();

    // cache player one username
    var username = this.state.username;
    this.setState({
      username: ""
    });

    if (this.props.routeParams.playerOne) {
      // on playerTwo. Go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });

    } else {
      // on playerOne. Go to /playerTwo
      console.log(this.context);
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  componentWillUnmount: function() {
    console.log("prompt componentWillUnmount");
  },
  render: function() {
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
