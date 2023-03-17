import { Outlet } from 'react-router-dom'
import styles from './AuthLayout.module.scss'

export const AuthLayout = (): JSX.Element => {
  return <div className={styles.container}>
    <Outlet/>
  </div>
}