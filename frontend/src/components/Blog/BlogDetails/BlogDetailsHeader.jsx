import { HiThumbUp } from "react-icons/hi";
import Button from "../../../ui/Button";
import dummyImage from '../../../images/dummyBlog.jpg'
import styles from './BlogDetailsHeader.module.css'

function BlogDetailsHeader() {
  return <>
    <div className={styles.heading}>
        <h1>Putovanje u Moskvu</h1>
        <Button type='primary'><HiThumbUp /> Like</Button>
    </div>
    <div className={styles.detailsInfo}>
        <img src={dummyImage} alt="dummyImg"/> 
        <div className={styles.blogInfo}>
            <p>Author: Sandro Simic</p>
            <p>Date: 27.01.2019</p>
            <p>Drzava: Rusija</p>
        </div>
    </div>
  </>;
}

export default BlogDetailsHeader;
