import { useEffect, useState } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(50);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return seconds;
};
export default useTimer;
