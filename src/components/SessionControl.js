import React from 'react';


function SessionControl(props) {

    function decrementSessionTime() {
        if (props.sessionTime === 1) {
            return;
        }
        props.decrementSession();
    }
    function incrementSessionTime() {
        if(props.sessionTime === 60) {
            return;
        }
        props.incrementSession();
    }

    return (
        <section>
            <section className="control-container">
                <button className="minus-btn" onClick={decrementSessionTime}>-</button>
                <p className="controller-text digits-main">{props.sessionTime}</p>
                <button className="plus-btn" onClick={incrementSessionTime}>+</button>
            </section>
            <h5>Session Time</h5>
        </section>
    )
}

export default SessionControl;