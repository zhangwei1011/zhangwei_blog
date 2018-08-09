import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './css/reset.css';
import './css/main.scss';
import Index from "./views/index/index.jsx";
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
