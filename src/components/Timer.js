import React from 'react';
import '../styles/Timer.css';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalID: 0,
            shouldStop: true
        }
        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    playTimer() {

        this.setState((prevState) => {
            return {
                shouldStop: !prevState.shouldStop
            }
        })
        if (this.state.shouldStop === false) {
            this.stopTimer();
        } else {
            let intervalID = setInterval(this.decreaseTimer, 1000);
            this.setState({
                intervalID: intervalID,
            })
        }
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession);
                        this.audio.play();
                        this.audio.currentTime = 0;
                    } else {
                        this.setState({
                            isSession: true
                        })
                        this.props.toggleInterval(this.state.isSession);
                        this.audio.play();
                        this.audio.currentTime = 0;
                    }
                }
                this.props.decreaseTimerMinute();
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalID);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.setState({
            timerSecond: 0
        })
        this.audio.pause();
        this.audio.currentTime = 0;
        this.setState({
            isSession: true
        })
    }

    render() {
        return (
            <div className='timer'>
                <div className='timer-values'>
                    <h4 id='timer-label'>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <content id='time-left'>
                        <span className='timer-text'>
                            {this.props.timerMinute === 0 ? '00' :
                                this.props.timerMinute < 10 ? '0' + this.props.timerMinute :
                                    this.props.timerMinute}
                        </span>
                        <span className='timer-text'>:</span>
                        <span className='timer-text'>
                            {this.state.timerSecond === 0 ? '00' :
                                this.state.timerSecond < 10 ? '0' + this.state.timerSecond :
                                    this.state.timerSecond}
                        </span>
                        <audio id='beep'
                            ref={ref => this.audio = ref}
                            src={"https://sampleswap.org/samples-ghost/REMIXABLE%20COLLECTIONS/105%20Dibble%20Dobble/1575[kb]105_sevenths-piano-chording.wav.mp3"}
                        >

                        </audio>
                    </content>
                </div>
                <div className='timer-buttons'>
                    <button id='start_stop' className='timer-button' onClick={this.playTimer}>START/STOP</button>
                    <button id='reset' className='timer-button' onClick={this.resetTimer}>RESET</button>
                </div>
            </div>
        )
    }
}
export default Timer;