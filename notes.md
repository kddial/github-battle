## Every React Component should have the following properties:

FIRST
- Focused
- Independent
- Reusable
- Small
-Testable


## Stateless Functional Componenets
function Test (props) {
  return (
    <div> {props.name} </div>
  )
}
<Test name="Kevin" />


## Flickr api key
Key: 	801b7a2c6ce44b8fa7b9045dc42a4c82
Secret: 8076dbfaa7d4185f


## JSX ternary operator example

```
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE! </p>
```

## Life cycle methods
Map: https://d2vvqscadf4c1f.cloudfront.net/RXZidTc7S5WEicK3fiNW_Screen%20Shot%202016-02-25%20at%2012.06.29%20PM.png

getDefaultProps:
- is invoked once when the class is created, and updates `this.props`
- usually not used

getInitialState: 
- is invoked when the component is mounted and updates `this.state`
- used often

componentWillMount: 
- runs before the component gets rendered
- act as a constructor for the component
- usually contains instance variables or synchronous items that doesn't affect the render

componentDidMount: 
- runs after the component gets rendered
- containing event listeners and ajax requests
- used the most

componentWillReceiveProps: 
- runs after component receives new props

componentWillUnmount: 
- runs after component is unmounted, or app is moved onto another component

shouldComponentUpdate: 
- i dont know?


## Webpack config file
Used for showing meaning full error messages from the source code
```devtool: 'eval-source-map'```

## Reduce function
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]

var initialValue = {};

var food_reducer = function(food_dict, food) {
  if (!food_dict[food]) {
    food_dict[food] = 1;
  } else {
    food_dict[food] = food_dict[food] + 1;
  }
  return food_dict;
}
var results = votes.reduce(food_reducer, initialValue);

