import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux imports//
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';

const store = createStore(reducer)




//reducer function here?

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

