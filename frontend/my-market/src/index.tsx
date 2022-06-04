import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./util/global";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// React.StrictMode
// 在严格模式下 周期函数回调用两次
// 包括 hooks函数: useEffect等
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
