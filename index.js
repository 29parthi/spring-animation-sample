import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Container from './Container';
import {Spring,config,Trail,Transition,animated,Keyframes} from 'react-spring/renderprops'

class App extends Component {
  render() {
    
    return (
       
<div>
<Spring
 native from={{x: 100}} to={{x: 0}}
  from={{color:'black', width:220,fontSize:100, background:
      'linear-gradient(to right, #30e8bf, #ff8235)' }}
  to={{color:'white', width:450,fontSize:200,   background: 'linear-gradient(to right, #fc0142, #FBD786)'}}
  config={config.molasses}
  reset={false}>
  {props =>   <animated.div style={props}>Hello</animated.div> }
</Spring>
</div>
    );
  }
}

render(<App />, document.getElementById('root'));
