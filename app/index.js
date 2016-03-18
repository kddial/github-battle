var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));



































var ProfilePic = React.createClass({
	// Properties: imageUrl
	render: function() {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
})

var ProfileName = React.createClass({
	// Properties: name
	render: function() {
		return (
			<div>{this.props.name}</div>
		)
	}
})

var Link = React.createClass({
	changeURL: function() {
		console.log(this.props.href);
	},
	render: function() {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}
			>
				{this.props.children}
			</span>
		)
	}

})

var ProfileLink = React.createClass({
	// Properties: username
	render() {
		return (
			<div>
				<Link href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
})

var Avatar = React.createClass({
	// Properties: imageUrl, name, username
	render() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
})

