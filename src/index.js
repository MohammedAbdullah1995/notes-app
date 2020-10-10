import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';
import {getAllNotes} from './redux/actions';


ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>
   ,

  document.getElementById('root')
);

store.dispatch(getAllNotes());

serviceWorker.unregister();


