import { HiPlus, HiSearch } from "react-icons/hi";
import styles from './BlogOperations.module.css'
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

function BlogOperations() {
  return <div className={styles.operations}>
  <div className={styles.blogOperations}>
    <Input type="text" placeholder="Search for blog title"/>
    <select className={styles.countrySelect}>
      <option>Country</option>
    </select>
    <Button type='primary'><HiSearch /><span className={styles.buttonText}>Search</span></Button>
  </div>
  <Button type='new' to='new-blog' ><HiPlus/> <span>New Blog</span></Button>
  </div>;
}

export default BlogOperations;
