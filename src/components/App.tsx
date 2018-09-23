import * as React from 'react';

import { Layout } from 'antd';

import {ExplorePage} from "./ExplorePage/ExplorePage";
import {FlickrHeader} from "./FlickrHeader";


// TODO define type or refactor to SFC
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <FlickrHeader/>
        <ExplorePage/>
        </Layout>
      </div>
    );
  }
}

export default App;
