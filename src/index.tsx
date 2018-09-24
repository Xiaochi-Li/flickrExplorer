import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {handleFetchImages} from "./reduxCore/actions/imageActions";
import middleware from './reduxCore/middlewares'
import reducers from './reduxCore/reducers';

/**
 * Rudux store
 */
const store = createStore(reducers, middleware);
store.dispatch(handleFetchImages);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
