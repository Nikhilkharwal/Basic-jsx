import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <div className="heading">
  <h1>Hey,My name is Nikhil</h1>
<p>Today's Date is{` ${date}`}</p>
<p>Current time is {time}</p>
</div>
<div className="img">
<img  src="https://picsum.photos/200/300" alt="loading" />
<img  src="https://picsum.photos/200/300/?blur" alt="loading" />
<img  src="https://picsum.photos/seed/picsum/200/300" alt="loading" />
 </div>
 <>
 <p className="heading">Every time you refresh the page new photos appear</p>
</>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
