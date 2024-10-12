import useWatch from '../hooks/useWatch';

export default function WatchDisplay() {
  const time = useWatch(new Date())
  return time.toLocaleTimeString()
}
