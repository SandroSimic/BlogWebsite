import { HiHome, HiBookmark,HiEye, HiUserGroup } from "react-icons/hi"

import styles from './NavItems.module.css'
function NavItems() {
  return (
      <ul className={styles.navLinks}>
        <li>
          <div>
            <HiHome />
            <p>Home</p>
          </div>
        </li>
        <li>
          <div>
            <HiBookmark />
            <p>Favorite</p>
          </div>
        </li>
        <li>
          <div>
            <HiEye />
            <p>Allow</p>
          </div>
        </li>
        <li>
          <div>
            <HiUserGroup />
            <p>Users</p>
          </div>
        </li>
      </ul>
  )
}

export default NavItems
