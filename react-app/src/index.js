import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/modal';
import { CartModalProvider } from './context/cartModal';
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartModalProvider>
        <ModalProvider>
            <App />
          </ModalProvider>
      </CartModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
