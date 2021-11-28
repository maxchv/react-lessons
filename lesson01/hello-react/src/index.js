import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SimpleHello, FunctionalComponentHelloWorld, ClassComponentHelloWorld } from './HelloWorld';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    // {/* <App /> */}
  //  SimpleHello,
  // <FunctionalComponentHelloWorld text='Hello ReactJS World' />,
  <ClassComponentHelloWorld text="It is component based on class" />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
