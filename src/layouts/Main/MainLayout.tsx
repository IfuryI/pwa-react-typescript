import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navigation/NavBar/NavBar'
import styles from './MainLayout.module.scss'

const MainLayout: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <Outlet />
      </div>
      <NavBar />
    </>
  )
}

export default MainLayout
