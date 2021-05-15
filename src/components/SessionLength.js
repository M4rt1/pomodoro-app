import '../styles/SessionLength.css';

function SessionLength(props) {

    function decreaseCounter() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    function increaseCounter() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    return (
        <div className='session-section'>
            <p id='session-label'>Session Length</p>
            <section className='session-timer'>
                <button id='session-decrement' className='value-buttons' onClick={decreaseCounter}>-</button>
                <p id='session-length'>{props.sessionLength}</p>
                <button id='session-increment' className='value-buttons' onClick={increaseCounter}>+</button>
            </section>
        </div >
    )
}

export default SessionLength;