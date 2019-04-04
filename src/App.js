import React, { Component } from 'react';
import './App.css';
import Toast from './Toast'

class App extends Component {

  notifyArr = [
    {
      text: "Last notification for sure",
      time: 5,
      id: 0
    },
    {
      text: "One more notification",
      time: 6,
      id: 1
    },
    {
      text: "Please contact support if you are free.",
      time: 7,
      id: 2
    },
    {
      text: "Sorry network issue, is what I can say right now",
      time: 4,
      id: 3
    },
    {
      text: "Hi, did you see the new iPhone?",
      time: 2,
      id: 4
    },
  ];

  constructor (props) {
    super(props);
    this.state = {
      initArr: []
    };
  }

  updateDS(obj) {
    obj.time = obj.time * 1000 + new Date().getTime();
    return obj;
  }

  destroyNotificationTimer() {
    let newArr = [];
    this.intervalID = setInterval(() => {
        newArr = [];
        for (let i = 0; i < this.state.initArr.length; i++) {
            if (this.state.initArr[i].time > new Date().getTime()) {
                newArr.push(this.state.initArr[i]);
            }
        }
        if (newArr.length === 0) {
          clearInterval(this.intervalID);
        }
        this.setState({
            initArr: newArr
        });
    }, 1000);
  }

  showNotificationBtn() {
    if (this.notifyArr.length === 0) {
      alert("No notifications left to show");
      return;
    }
    this.setState((obj) => {
      obj.initArr.push(this.updateDS(this.notifyArr.pop()));
      return obj;
    });
    if (this.state.initArr.length <= 1) {
      this.destroyNotificationTimer();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Toast-container">
          {this.state.initArr.map((obj) => {return (<Toast id={obj.id} text={obj.text}/>);})}
        </div>
        <header className="App-header">
          <heading>Hello World</heading>
          <button className="Footer-button" onClick={() => this.showNotificationBtn()}>Show Notifications</button>
        </header>
      </div>
    );
  }
}

export default App;
