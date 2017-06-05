import React from 'react';

export default class Spaceship extends React.Component{
  render() {
    return (
      <div className="spaceship" >
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

const defaultColors = ['black','red'];
/*

4 passing (111ms)
1 failing

1) <Spaceship /> Props colors should default to `['black', 'red']`:
   Error: Expected [ 'black', 'red' ] to include [ 'black', 'red' ]
    at assert (node_modules/expect/lib/assert.js:29:9)
    at Expectation.toInclude (node_modules/expect/lib/Expectation.js:215:28)
    at Context.<anonymous> (test/index-test.js:31:47)

*/

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: defaultColors
}
