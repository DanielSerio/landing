import React, { useEffect, useState } from 'react'

export default function useTimer() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout|null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [timeStart, setTimeStart] = useState<number>(0);
  
  const stop = () => setIsRunning(false);

  const resume = () => setIsRunning(true);

  const start = (cb?: () => void) => {
    resume();
    setTimeStart(Date.now());
    setTimer(Date.now());
    if (cb) cb();
  };

  const clear = () => {
    setTimeStart(0);
    setTimer(0);
  };

  const reset = () => {
    stop();
    clear();
  };

  const elapsed = (): number => timer - timeStart;

  useEffect(() => {
    if (isRunning && !timerInterval) {
      setTimerInterval(setInterval(() => {
        setTimer(Date.now());
        console.group('interval');
      }, 250) );
    }

    if (!isRunning && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
      setTimerInterval(null);
    }
  }, [isRunning]);

  return {start, stop, clear, reset, resume, elapsed, timer, isRunning, timeStart}
}
