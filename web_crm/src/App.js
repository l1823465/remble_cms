import React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import routerList from './router/routerList'
// import RouterView from './router/RouterView'
import store from './store/index'

import './App.css';


export default ()=> {
    return (
       <Provider store={store}>
            <BrowserRouter>
                 <React.Meili.Routerview routes={routerList} />
            </BrowserRouter>
       </Provider>
    );
}



