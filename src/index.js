import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
   <Route exact path ="/" component={Home}/>
   <Route exact path ="/userreg" component={App}/>
   <Route exact path ="/contact" component={Contact}/>
   <Route exact path ="/about" component={About}/>

    </HashRouter>,

);

