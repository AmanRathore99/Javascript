import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.min.css'



import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";

import createSagaMiddleware from 'redux-saga'
import reducer from './ProductSaga/reducers/reducers'
import rootSaga from './ProductSaga/sagas/Saga'

import MainSagaComponent from './ProductSaga/mainSagaComponent/mainSagaComponent'

const sagaMiddleware = createSagaMiddleware();

const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
let store = createStore(reducer, parameterEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  
  
  <React.StrictMode>

<BrowserRouter>
<Provider store={store}>

   <MainSagaComponent></MainSagaComponent>

 </Provider>

</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
