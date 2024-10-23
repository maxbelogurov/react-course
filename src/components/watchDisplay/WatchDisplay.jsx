import useWatch from '../hooks/useWatch';

export default function WatchDisplay() {
  const time = useWatch()
  return time ? time.toLocaleTimeString() : null
}
