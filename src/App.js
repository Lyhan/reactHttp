import React, {Component} from 'react';

import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            // If domain serving the app is not root e.g. example.com/my-app
            // <BrowserRouter basename="my-app">
            <BrowserRouter>
                <div className="App">
                    <Blog/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
