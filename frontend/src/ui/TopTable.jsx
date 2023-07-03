/* eslint-disable react/prop-types */
import styles from './TopTable.module.css'

function TopTable({type}) {
  return <div className={styles.table}>
    <h1>
        Top 5 {type}
    </h1>
    <div className={styles.blogs}>
        <p>Blog - 1 - 100</p>
        <p>Blog - 2 - 63</p>
        <p>Blog - 3 - 54</p>
        <p>Blog - 4 - 32</p>
        <p>Blog - 5 - 30</p>
    </div>
  </div>;
}

export default TopTable;
