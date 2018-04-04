import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import Header from "../../components/header.jsx";
class Index extends Component {
    render() {
        return (
           <div className="index">
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
           </div>
        );
    }
}


export default Index;