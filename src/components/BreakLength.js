import '../styles/BreakLength.css';

function BreakLength(props) {
    function decreaseCounter() {
        if (props.breakLength === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.breakLength === 60) {
            return;
        }
        props.increaseBreak();
    }
    return (
        <div className='break-section'>
            <p id='break-label'>Break Length</p>
            <content className='break-timer'>
                <button className='value-buttons' id='break-decrement' onClick={decreaseCounter}>-</button>
                <p id='break-length'>{props.breakLength}</p>
                <button className='value-buttons' id='break-increment' onClick={increaseCounter}>+</button>
            </content>
        </div>
    )
}

export default BreakLength;