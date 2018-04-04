import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                >
                <Menu.Item key="mail">
                    首页
                </Menu.Item>
                <Menu.Item key="app">
                   文章分享
                </Menu.Item>
                <SubMenu title={<span>我的世界</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                
            </Menu>
        );
    }
}


export default Nav;