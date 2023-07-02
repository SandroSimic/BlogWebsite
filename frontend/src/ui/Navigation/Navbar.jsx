import NavItems from "./NavItems";
import Username from "./Username";
import styles from './Navbar.module.css'

function Navbar() {
  return <nav className={styles.navigation}>
    <NavItems />
    <Username />
  </nav>;
}

export default Navbar;
