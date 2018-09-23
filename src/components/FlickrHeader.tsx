import * as React from 'react';

import {Layout, Menu} from 'antd';

const {Header} = Layout;

interface InterfaceFlickrHeader {
}

export const FlickrHeader: React.SFC<InterfaceFlickrHeader> = (props) => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Explore</Menu.Item>
        <Menu.Item key="2">Favorite</Menu.Item>
      </Menu>
    </Header>
  )
}
