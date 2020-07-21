import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker'
import { createStore, combineReducers, compose } from 'redux'
import { listOfProductsReducer } from './redux/reducers/listOfProducts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

const rootReducer = combineReducers({
    listOfProducts: listOfProductsReducer,
    // orderSummary: orderSummaryReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers,
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();