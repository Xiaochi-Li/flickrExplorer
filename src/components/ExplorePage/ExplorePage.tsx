import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Layout} from "antd";
import Images from "./Images";
import SingleImage from "./SingleImage";

const {Content} = Layout;

interface InterfaceExplorePage {
}

export const ExplorePage: React.SFC<InterfaceExplorePage> = (props: any) => {
  return (
    <Content style={{padding: '0 50px'}}>
      <Switch>
        <Route exact={true} path='/' component={Images}/>
        <Route path='/images/:id' component={SingleImage}/>
      </Switch>
    </Content>
  )
};
