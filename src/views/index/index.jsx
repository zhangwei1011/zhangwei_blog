import React, { Component } from 'react';
import './index.scss';
// import Header from "../../components/Header.jsx";
// import Album from "../../components/Album.jsx";
import List from "../../components/User.jsx";
class Index extends Component {
    render() {
        return (
            <div className="page">
                {/* <header>
                    <div className="container">
                        <Header />
                    </div>
                </header> */}
                <section>
                    <div className="container">
                        <List />
                        {/* <div className="main">
                            <div className="albums">
                                <ul>
                                    <Album />
                                    <Album />
                                    <Album />
                                    <Album />
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        );
    }
}


export default Index;
