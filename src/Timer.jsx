import React, { useEffect, useState } from "react";

function Timer({ day = 27, month = 7, year = 2023 }) {
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const targetDate = new Date(year, month - 1, day);
        const difference = targetDate - currentDate;

        if (difference > 0) {
            const seconds = Math.floor((difference / 1000) % 60);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));

            return {
                days,
                hours,
                minutes,
                seconds
            };
        }

        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            <div className="Timer">
                <div className="days-count">
                    <p>{timeLeft.days}</p>
                    <div className="TimerLabel">
                        {window.innerWidth <= 768 ? (
                            <p>DD</p>
                        ) : (
                            <p>Days</p>
                        )}
                    </div>
                </div>
                <div className="db-dot">:</div>
                <div className="hours-count">
                    <p>{timeLeft.hours}</p>
                    <div className="TimerLabel">{window.innerWidth <= 768 ? (
                        <p>HH</p>
                    ) : (
                        <p>Hours</p>
                    )}</div>
                </div>
                <div className="db-dot">:</div>
                <div className="minutes-count">
                    <p>{timeLeft.minutes}</p>
                    <div className="TimerLabel">{window.innerWidth <= 768 ? (
                        <p>MM</p>
                    ) : (
                        <p>Minutes</p>
                    )}</div>
                </div>
                <div className="db-dot">:</div>
                <div className="seconds-count">
                    <p>{timeLeft.seconds}</p>
                    <div className="TimerLabel">{window.innerWidth <= 768 ? (
                        <p>SS</p>
                    ) : (
                        <p>Seconds</p>
                    )}</div>
                </div>
            </div>
        </>
    );
}

export default Timer;