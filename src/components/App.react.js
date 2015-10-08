import React from 'react';

import Header from './Header.react';

export default class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}