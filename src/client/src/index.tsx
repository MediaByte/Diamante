import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.styles.css';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
