import React, { Component, useState, useRef } from 'react';
import { render } from 'react-dom';
import './style.css';

import NavBar from './containers/NavBar';
import Card from './containers/Card';
import Counter from './components/CounterHook';

// import custom elements
import './web-components/ImperativeCounter';
import './web-components/DeclarativeCounter';


const CounterApp = () => {
  return <div>
    <Counter />
  </div>;
}

render(<CounterApp />, document.getElementById('root'));
