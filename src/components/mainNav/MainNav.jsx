"use client"

import styles from './MainNav.module.scss'
import Link from 'next/link';
import Button from '../ui/Button/Button';

export default function MainNav() {
  return (
    <div>
      <Link href='/' className={styles.navItem}>
        <Button>Home</Button>
      </Link>
      <Link href='/restaurants' className={styles.navItem}>
        <Button>Restaurants</Button>
      </Link>
    </div>
  )
}
