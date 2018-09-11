import React, { Component } from 'react';
import './assets/css/reset.css';
import 'element-theme-default';
import './assets/css/main.scss';
// import Index from "./views/index/index.jsx";
// import Index from "./views/comment-app/index.jsx";
// import Index from "./views/clock/index.jsx";
import Index from "./views/card/index.jsx";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Index />
            </div>
        );
    }
}

export default App;
