import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return <div>22222</div>;
  }
}

ReactDom.render(<App />, document.getElementById('root'));