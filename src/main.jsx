import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);
