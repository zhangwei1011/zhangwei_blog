import React from 'react';
import { Menu } from 'element-react';
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (<div className="header">
      <div className="line"></div>
      <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
        <Menu.Item index="1">读书</Menu.Item>
        <Menu.Item index="2">电影</Menu.Item>
        <Menu.Item index="3">音乐</Menu.Item>
        <Menu.Item index="4">小组</Menu.Item>
        <Menu.Item index="5">同城</Menu.Item>
        <Menu.Item index="6">FM</Menu.Item>
      </Menu>
    </div>);
  }
}

export default Header;
