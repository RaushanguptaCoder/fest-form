import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState({ hour: 0, mint: 0, sec: 0, milli: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prevTime => {
                    let { hour, mint, sec, milli } = prevTime;
                    milli++;
                    if (milli === 100) {
                        milli = 0;
                        sec++;
                    }
                    if (sec === 60) {
                        sec = 0;
                        mint++;
                    }
                    if (mint === 60) {
                        mint = 0;
                        hour++;
                    }
                    return { hour, mint, sec, milli };
                });
            }, 10);
        }
    };

    const stop = () => {
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const reset = () => {
        stop();
        setTime({ hour: 0, mint: 0, sec: 0, milli: 0 });
    };

    // Clean up interval on unmount
    React.useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className='container'>
                <h1>{time.hour + ":" + time.mint + ":" + time.sec + ":" + time.milli}</h1>
                <div className='buttons'>
                    <button className='Start' onClick={start}>Start</button>
                    <button className='stop' onClick={stop}>Stop</button>
                    <button className='reset' onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default Stopwatch;
