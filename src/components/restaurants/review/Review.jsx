import styles from './Review.module.scss'
export default function Review({review}) {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
        <span  className={styles.reviewName}> { review.user }</span>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a55c" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          { review.rating }
        </div>
      </div>
      <p className={styles.reviewText}>{ review.text }</p>
    </div>
  )
}
