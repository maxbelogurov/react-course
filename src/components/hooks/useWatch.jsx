import {useState, useEffect} from 'react';

export default function useWatch() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => { clearInterval(intervalId) }
  }, []);

  return time
}
