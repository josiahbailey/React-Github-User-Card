import React from 'react';
import './App.css';
import CardList from './components/CardList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      myData: {},
      followData: []
    }
  }
  render() {
    return (
      <div>
        <CardList /*myData={myData} followData={followData}*/ />
      </div>
    )
  }
}

export default App;
