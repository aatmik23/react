import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function Myapp(){
  return  <div>
    <h1>hello i am my app</h1>
  </div>
}

// const reactelement = { 
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     Children : 'click to visit here'
// }

// const newelement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const reactelement = React.createElement(
  'a',{href:'https://google.com', target:'_blank'},'click me to reactelement visit'
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

