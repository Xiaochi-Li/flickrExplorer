import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout} from 'antd';

import {ExplorePage} from "./ExplorePage/ExplorePage";
import {FlickrHeader} from "./FlickrHeader";


// TODO define type or refactor to SFC
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <FlickrHeader/>
            <ExplorePage/>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
