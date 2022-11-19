import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { rootReducer }  from './redux/rootReducer'
import { configureStore, createStore } from '@reduxjs/toolkit'
import App from './App';


 const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
   
);
  
   


