import './App.css';
import React from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultSession: 25,
      defaultBreak: 5,
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onDecreaseTimerMinute = this.onDecreaseTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.timerMinute + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onDecreaseTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.defaultSession,
      timerBreak: this.state.defaultBreak,
      sessionLength: this.state.defaultSession,
      breakLength: this.state.defaultBreak
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>POMODORO TIMER</h1>
        <section className='timers'>
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
          <Timer
            decreaseTimerMinute={this.onDecreaseTimerMinute}
            toggleInterval={this.onToggleInterval}
            timerMinute={this.state.timerMinute}
            timerBreak={this.state.breakLength}
            resetTimer={this.onResetTimer}
          />
          <BreakLength
            breakLength={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
        </section>
      </div>
    );
  }
}

export default App;
