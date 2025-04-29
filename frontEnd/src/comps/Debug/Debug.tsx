import { useState, useEffect } from "react";

import "./Debug.css";

function Debug() {
    let winszw = window.innerWidth;
    let winszh = window.innerHeight;

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // Optional: Update the date every second
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

    return (
        <>
            <div className="debugger">
                size: {winszw}x{winszh}
                <br />
                {date.toDateString()}
            </div>
        </>
    );
}

export default Debug;
