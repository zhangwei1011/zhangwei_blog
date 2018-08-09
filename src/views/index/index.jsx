import React, { Component } from 'react';
import { Layout } from 'antd';
import Slider from "../../components/Slider.jsx";
const { Header, Footer, Content } = Layout;
class Index extends Component {
    render() {
        return (
            <Header>
                <Slider />
            </Header>
        );
    }
}


export default Index;
