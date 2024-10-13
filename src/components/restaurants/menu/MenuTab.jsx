import styles from './MenuTab.module.scss'
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectMenuById} from "../../../redux/menu"

export default function MenuTab({id}) {
  const menu = useSelector((state) => selectMenuById(state, id))
  return (
    <NavLink to={`/dish/${id}`} className={styles.menuTab}>
      {menu.name}
    </NavLink>
  )
}
