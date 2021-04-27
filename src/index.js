import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline'
import {Provider} from 'react-redux'
import store from './store/index'
import {SettingsProvider} from './context/SettingsContext'
import {getSettings} from './utils/settings'

const settings = getSettings()


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={store}>
      <SettingsProvider settings={settings}> 
      <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
