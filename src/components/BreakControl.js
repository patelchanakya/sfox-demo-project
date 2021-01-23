import React from 'react';

function BreakControl(props) {
    // so user cannot go below 1
    function decrementBreakTime() {
        if (props.breakTime === 1) {
            return;
        }
        props.decrementBreak();
    }
    // so user cannot go above 60
    function incrementBreakTime() {
        if(props.breakTime === 60) {
            return;
        }
        props.incrementBreak();
    }

    return (
        <section>
            <section className="control-container">
                <button className="minus-btn" onClick={decrementBreakTime}>-</button>
                <p className="controller-text digits-main">{props.breakTime}</p>
                <button className="plus-btn" onClick={incrementBreakTime}>+</button>
            </section>
            <div>
                <h5>Break Time</h5>
            </div>
        </section>
    )

}

export default BreakControl;