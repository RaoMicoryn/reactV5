import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card">
            <h3>Timer</h3>
            <p>{time} seconds</p>
        </div>
    );
}

export default Timer;