import React from 'react';
import {Howl, Howler} from 'howler';

class Clock extends React.Component {
    constructor() {
        super();

        this.state = {
            sessionRunning: true,
            clockSec: 0,
            id: 0
        };

        this.playBtn = this.playBtn.bind(this);
        this.pauseBtn = this.pauseBtn.bind(this);
        this.resetBtn = this.resetBtn.bind(this);

        this.decrementTime = this.decrementTime.bind(this);

    }

    // play btn
    playBtn() {
        let id = setInterval(this.decrementTime, 1000);
        // this.props.playFunction(true);
        this.setState({
            id: id
        })
    }
    // pause btn
    pauseBtn() {
        clearInterval(this.state.id);
        // this.props.playFunction(false);
    }
    // reset btn
    resetBtn() {
        this.pauseBtn();
        this.props.resetTime();
        // this.props.playFunction(false);
        this.setState({
            clockSec: 0,
            sessionRunning: true
        })
    }

    playFunction() {
        this.props.playFunction();
    }

    soundFunction = (src) => {
        const sound = new Howl({
            src: ['notif.mp3'],
            autoplay: true
        });
        sound.play();
    }


    decrementTime() {
        switch (this.state.clockSec) {
            case 0:
                if (this.props.clockMin === 0) {
                    if (this.state.sessionRunning) {
                        this.soundFunction();
                        this.setState({
                            sessionRunning: false
                        });

                        this.props.handleMode(this.state.sessionRunning);
                    }
                    else {
                        this.setState({
                            sessionRunning: true
                        });

                        this.props.handleMode(this.state.sessionRunning);
                    }
                }
                
                this.props.updateClockMin()
                this.setState({
                    clockSec: 59
                })
                break;
            default:
                this.setState((prevState) => {
                    return {
                        clockSec: prevState.clockSec - 1
                    }
                })
                break;
        }
    }

    // endSound() {
    //     let audio = new Audio("/notif.mp3");
    //     if (this.props.clockMin === 0 && this.props.clockSec === 0) {
    //         audio.play();
    //     }
    // }

    lightDarkToggle() {
        let element = document.body;
        element.classList.toggle("light-mode-background")
    }

    render() {
        Howler.volume(1);
        return (
            <section>
                <section className="clock-main">
                    <button onClick={this.lightDarkToggle}>toggle light</button>
                    <h4>{this.state.sessionRunning === true ? " " : "Break in progress"}</h4>
                    <span className="clock-text digits-main">{this.props.clockMin}</span>
                    <span className="clock-text digits-main">:</span>
                    <span className="clock-text digits-main">{this.state.clockSec === 0 ? "00" : this.state.clockSec < 10 ? "0" + this.state.clockSec : this.state.clockSec}</span>
                </section>
                <section className="clock-btns ">
                    <button onClick={this.playBtn}>Play</button>
                    <button onClick={this.pauseBtn}>Pause</button>
                    <button onClick={this.resetBtn}>Reset</button>
                </section>
                
            </section>
            
        )
    }
}

export default Clock;