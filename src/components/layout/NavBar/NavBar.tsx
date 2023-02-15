import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import NavButton from '../../navigation/NavButton/NavButton'
import { ReactComponent as ProfileSvg } from '../../../assets/nav-bar/Profile.svg';
import { ReactComponent as HouseholdSvg } from '../../../assets/nav-bar/Household.svg';
import { ReactComponent as SearchSvg } from '../../../assets/nav-bar/Search.svg';
import { ReactComponent as MatchSvg } from '../../../assets/nav-bar/Match.svg';
import { ReactComponent as NotificationsSvg } from '../../../assets/nav-bar/Notifications.svg';
import { useLocation } from 'react-router-dom';

type Props = {}

const NavBar = (props: Props) => {
    let [locBase, setLocBase] = useState('')
    let location = useLocation();
    const menu = [
        { to: '/profile', icon: ProfileSvg, abbr: 'profi' },
        { to: '/household', icon: HouseholdSvg, abbr: 'house' },
        { to: '/search', icon: SearchSvg, abbr: 'searc' },
        { to: '/match', icon: MatchSvg, abbr: 'match' },
        { to: '/notifications', icon: NotificationsSvg, abbr: 'notif' }
    ]

    useEffect(() => {
        setLocBase(location.pathname.slice(1, 6))
    }, [location])

    return (
        <div className="navbar" id="myNavbar">
            <nav className="navbox">
                {menu.map((menu) => (
                    <NavButton to={menu.to} icon={menu.icon} active={locBase === menu.abbr ? true : false} />
                ))
                }
                
            </nav>
        </div>
    )
}

export default NavBar