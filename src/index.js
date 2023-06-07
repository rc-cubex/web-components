import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import MyComponent from './MyComponent';

export default function index() {
  return (
    <></>
  )
}

const MyWebComponent = reactToWebComponent(MyComponent, React, ReactDOM);

customElements.define('my-web-component', MyWebComponent);





