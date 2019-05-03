import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.min';
import * as serviceWorker from './serviceWorker';
import App from './Components/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
