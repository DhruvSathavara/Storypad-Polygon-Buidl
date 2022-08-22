import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import { BookContextProvider } from './Context/BookContext';
import 'react-toastify/dist/ReactToastify.css';





const root = ReactDOM.createRoot(document.getElementById("root"));
const serverUrl=process.env.REACT_APP_MORALIS_SERVER;
const appId=process.env.REACT_APP_MORALIS_KEY;
root.render(
  
  <MoralisProvider appId= {appId} serverUrl={serverUrl}>
  <BookContextProvider>
  <BrowserRouter>
  <App />

    </BrowserRouter>
    </BookContextProvider>
    </MoralisProvider>,
   
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();