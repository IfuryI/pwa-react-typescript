import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

type Props = {
    children?: any
}

const MainLayout = (props: Props) => {
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