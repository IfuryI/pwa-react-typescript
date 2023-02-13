import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import styles from './Layout.module.css'

interface NavItem {
  name: string
  class: string
  isSelected: boolean
}

const items: NavItem[] = [
  { name: 'Avatar', class: styles.avatar, isSelected: true },
  { name: 'Home', class: styles.home, isSelected: false },
  { name: 'Search', class: styles.search, isSelected: false },
  { name: 'Roommate', class: styles.roommate, isSelected: false },
  { name: 'Notifications', class: styles.notification, isSelected: false }
]

export const Layout = (): JSX.Element => {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState(items)
  const onItemSelect = (item: NavItem): void => {
    setNavItems(navItems.map(i => ({
      ...i,
      isSelected: i.name === item.name
    })))

    if (item.name === 'Home') {
      navigate('/login')
    }
  }

  return <div className={styles.layoutContainer}>
        <div className={styles.layoutContent}>
            <p className={styles.test}>Hello there!</p>
        </div>
        <div className={styles.navigationMenu}>
            {
                navItems.map((item, index) => <i key={index}
                    className={`${item.class} ${item.isSelected ? styles.active : ''}`}
                    onClick={(_) => { onItemSelect(item) }}
                ></i>)
            }
        </div>
    </div>
}
