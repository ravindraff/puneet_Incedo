import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './components/Clock';


// setInterval(() => {
//   let today = new Date();
//   ReactDOM.render(
//   <Clock today={today}></Clock>,
//   document.getElementById('root')
//   );
// }, 1000)

  ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
