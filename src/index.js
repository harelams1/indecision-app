import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import 'normalize.css/normalize.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
