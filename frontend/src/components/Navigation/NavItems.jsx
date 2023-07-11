import { HiHome, HiBookmark, HiUserGroup, HiEye } from "react-icons/hi"

import styles from "./NavItems.module.css"
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../context/authContext"
function NavItems() {
  const { user } = useAuthContext()
  console.log(user)

  if (user?.role === "admin") {
    return (
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">
            <HiHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite">
            <HiBookmark />
            <p>Favorite</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/allow">
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

  if (user) {
    return (
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">
            <HiHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite">
            <HiBookmark />
            <p>Favorite</p>
          </NavLink>
        </li>
      </ul>
    )
  }
  
  if (!user) {
    return (
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">
            <HiHome />
            <p>Home</p>
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default NavItems
