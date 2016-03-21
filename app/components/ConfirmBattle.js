var React = require('react');

// presentational component
function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
