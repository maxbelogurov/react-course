export default function Review({review}) {
  return (
    <div>
      <p>{ review.user }: <em>{ review.text }</em></p>
    </div>
  )
}
