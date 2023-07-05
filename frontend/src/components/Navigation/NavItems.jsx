import { HiHome, HiBookmark,HiEye, HiUserGroup } from "react-icons/hi"

import styles from './NavItems.module.css'
import {NavLink } from "react-router-dom"
function NavItems() {
  return (
      <ul className={styles.navLinks}>
        <li>
          <NavLink to='/'>
            <HiHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorite'>
            <HiBookmark />
            <p>Favorite</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/allow'>
            <HiEye />
            <p>Allow</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <HiUserGroup />
            <p>Users</p>
          </NavLink>
        </li>
      </ul>
  )
}

export default NavItems
