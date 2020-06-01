import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Spring,config,Trail,Transition,animated,Keyframes} from 'react-spring/renderprops'

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true 
    };
  }

  toggle=e=>{
    this.setState(state=> ({show: !state.show}))
  }

  render() {
    return (
      <div onClick={this.toggle}>
        <Transition
          native
          items={this.state.show}
          from={{ fontSize:100, position: 'absolute', overflow: 'hidden', height: 0 }}
          enter={[{ height: 'auto' }]}
          leave={{ height: 0 }}
          config={config.molasses}>
          {show =>
            show ? (props => <animated.div style={props}>hello</animated.div>)
            : (props => <animated.div style={props}>amigo</animated.div>)
          }
        </Transition>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
