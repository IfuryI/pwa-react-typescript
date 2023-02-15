
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const MainLayout = () => {
    return (
        <>
            <div className="App">
                <Outlet />
            </div>
            <NavBar />
        </>
    )
}

export default MainLayout
