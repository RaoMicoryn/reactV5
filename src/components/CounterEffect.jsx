import { useState, useEffect } from "react";

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count changed");
    }, [count]);

    return (
        <div className="card">
            <h3>CounterEffect</h3>
            <p> Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default CounterEffect;