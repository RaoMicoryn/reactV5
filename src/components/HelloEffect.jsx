import { useEffect } from "react";

function HelloEffect() {
    useEffect(() => {
        console.log("component mounted");
    }, []);

    return (
        <div className="card">
            <h3>Hello Effect</h3>
            <p>check console on first render.</p>
        </div>
    );
}

export default HelloEffect;