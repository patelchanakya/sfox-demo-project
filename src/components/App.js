import React from 'react';
import '../App.css';
import BreakControl from './BreakControl';
import SessionControl from './SessionControl';
import Clock from './Clock';

// state being kept at the App level component
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      breakTime: 5,
      sessionTime: 25,
      clockMin: 25,
      // timeRunning: false
    };

    // bind because we are using 'this' within the function
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);

    this.handleMode = this.handleMode.bind(this);
    this.handleUpdateClockMin = this.handleUpdateClockMin.bind(this);

    this.handleResetClock = this.handleResetClock.bind(this);

    // this.handlePlayFunction = this.handlePlayFunction.bind(this);
    
  }

  // handle break time controls
  handleBreakIncrement() {
    this.setState((prevState) => {
      return {
        breakTime: prevState.breakTime + 1
      }
    })
  }
  handleBreakDecrement() {
    this.setState((prevState) => {
      return {
        breakTime: prevState.breakTime - 1
      }
    })
  }

  // handle session time controls
  handleSessionIncrement() {
    this.setState((prevState) => {
      return {
        sessionTime: prevState.sessionTime + 1,
        clockMin: prevState.clockMin + 1
      }
    })
  }
  handleSessionDecrement() {
    this.setState((prevState) => {
      return {
        sessionTime: prevState.sessionTime - 1,
        clockMin: prevState.clockMin - 1
      }
    })
  }

  handleMode(sessionRunning) {
    if (sessionRunning) {
      this.setState({
        clockMin: this.state.sessionTime
      })
    }
    else {
      this.setState({
        clockMin: this.state.breakTime
      })
    }
  }

  // handlePlayFunction(timeRunning) {
  //   this.setState({
  //     timeRunning: timeRunning
  //   })
  // }

  handleUpdateClockMin() {
    this.setState((prevState) => {
      return {
        clockMin: prevState.clockMin - 1
      }
    })
  }

  handleResetClock() {
    this.setState({
      clockMin: this.state.sessionTime
    })
  }

  render() {
    return (
      <main>
        
        <Clock
          clockMin={this.state.clockMin}
          breakTime={this.state.breakTime}
          updateClockMin={this.handleUpdateClockMin}
          handleMode={this.handleMode}
          resetTime={this.handleResetClock}
          playFunction={this.handlePlayFunction}
        />
        
        <section className="controllers-main">
          <BreakControl
            breakTime={this.state.breakTime}
            incrementBreak={this.handleBreakIncrement}
            decrementBreak={this.handleBreakDecrement}
            // timeRunning={this.state.timeRunning}
          />
          <SessionControl
            sessionTime={this.state.sessionTime}
            incrementSession={this.handleSessionIncrement}
            decrementSession={this.handleSessionDecrement}
            // timeRunning={this.state.timeRunning}
          />
        </section>
      </main>
    );
  }
  
}

export default App;
