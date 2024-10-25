'use client'

import styles from './MenuTab.module.scss'
import Link from 'next/link';
import {useSelector} from 'react-redux';
import {selectMenuById} from "../../../redux/menu"

export default function MenuTab({id}) {
  const menu = useSelector((state) => selectMenuById(state, id))

  if (!menu) {
    return null
  }

  return (
    <Link href={`/dish/${id}`} className={styles.menuTab}>
      {menu.name}
    </Link>
  )
}
