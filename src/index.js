import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// First argument is the name of component, Second is the location of element on page.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
