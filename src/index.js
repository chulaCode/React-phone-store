import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router}
from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './Context';
ReactDOM.render(
    //TO ensure all ur app access the context api 
    // place it in the highest tree possible
    <ProductProvider>
          <Router>
<App />
    </Router>  
    </ProductProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
