import { useEffect, useState } from "react";

function ConditionalEffect() {
    const [isOn, SetIsOn] = useState(false);

    useEffect(() => {
        if (isOn) {
            console.log("effect is running");
        }
    }, [isOn]);

    return (
        <div className="card">
            <h3>Conditional Effect</h3>
            <button onClick={() => SetIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
        </div>
    );
}

export default ConditionalEffect;