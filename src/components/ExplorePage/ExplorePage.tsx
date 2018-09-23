import * as React from 'react';

import {Breadcrumb, Layout} from "antd";
import Images from "./Images";

const {Content} = Layout;

interface InterfaceExplorePage {
}

export const ExplorePage: React.SFC<InterfaceExplorePage> = (props: any) => {
  return (
    <Content style={{padding: '0 50px'}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Gallery</Breadcrumb.Item>
        <Breadcrumb.Item>Single Image</Breadcrumb.Item>
      </Breadcrumb>
      <Images/>
    </Content>
  )
};
