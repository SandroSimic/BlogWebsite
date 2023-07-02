import { HiPlus, HiSearch } from "react-icons/hi";
import styles from './BlogOperations.module.css'
import Button from "../Button";
import Input from "../Input";

function BlogOperations() {
  return <div className={styles.operations}>
  <div className={styles.blogOperations}>
    <Input type="text" placeholder="Search for blog title"/>
    <select className={styles.countrySelect}>
      <option>Country</option>
    </select>
    <Button type='primary'><HiSearch /> Search</Button>
  </div>
  <Button type='new' to='new-blog'><HiPlus/> New Blog</Button>
  </div>;
}

export default BlogOperations;
