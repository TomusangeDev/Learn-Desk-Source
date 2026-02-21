import { useState, useEffect } from "react";
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
     return (
            <span>
                {time.toLocaleDateString("en-GB", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}{" "} | {" "} {time.toLocaleTimeString()}
            </span>
        );
}
export default Clock;