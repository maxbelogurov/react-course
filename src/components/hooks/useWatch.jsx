import {useState, useEffect} from 'react';

export default function useWatch(date) {
  const [time, setTime] = useState(date)

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => { clearTimeout(updateTime) }
  }, []);

  return time
}
