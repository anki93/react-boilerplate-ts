import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, middleware);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
