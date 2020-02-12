import React from 'react';
import './App.css';
import CardList from './components/CardList'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      myData: {},
      followData: []
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/josiahbailey')
    .then(res => {
      console.log(res)
      this.setState({
        myData: res.data
      })
    })
    .catch(err => {
      console.log("Call 1 ERROR", err)
    })
    axios.get('https://api.github.com/users/josiahbailey/followers')
    .then(res => {
      console.log(res)
      this.setState({
        followData: res.data
      })
    })
    .catch(err => {
      console.log("Call 2 ERROR", err)
    })
  }
  render() {
    return (
      <div>
        <CardList myData={this.state.myData} followData={this.state.followData} />
      </div>
    )
  }
}

export default App;
