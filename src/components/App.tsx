import * as React from 'react';
import { connect } from "react-redux";

// import {InterfaceDispatchFunctions} from "../DataType/imageDataType";


// import { handleFetchImages} from "../reduxCore/actions/imageActions";

// @ts-ignore
class App extends React.Component {
  // public componentWillMount(){
  //   this.props.dispatch(handleFetchImages);
  // }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
