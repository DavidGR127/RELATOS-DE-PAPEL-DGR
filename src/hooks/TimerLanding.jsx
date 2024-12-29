// ..........HOOKS UTILIZADOS....................
import { useEffect, useState } from "react";
// ..

const useTimerLanding = () => {
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return seconds;
};
export default useTimerLanding;
