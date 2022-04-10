import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defState = {
  cash: 0,
}

function reducer(state = defState, action) {
  switch(action.type) {
    case "cash/add":
      return {...state, cash: state.cash + action.payload}
    case "cash/get":
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
