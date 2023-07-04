import BlogDetailsHeader from "../components/Blog/BlogDetails/BlogDetailsHeader";
import styles from './BlogDetails.module.css'

function BlogDetails() {
  return <div className={styles.blogDetails}>
    <BlogDetailsHeader /> 
  </div>;
}

export default BlogDetails;
