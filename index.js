import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//if you want your app to work offline and load faster, you can change 
// unregister() to register() bel

serviceWorker.unregister();