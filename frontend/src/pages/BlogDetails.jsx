import BlogDetailsHeader from "../components/Blog/BlogDetails/BlogDetailsHeader";
import BlogDetailsText from "../components/Blog/BlogDetails/BlogDetailsText"
import BlogImages from "../components/Blog/BlogDetails/BlogDetailsImages";
import styles from './BlogDetails.module.css'
import BlogComments from "../components/Blog/BlogDetails/BlogComments";

function BlogDetails() {
  return <div className={styles.blogDetails}>
    <BlogDetailsHeader /> 
    <BlogDetailsText /> 
    <BlogImages /> 
    <BlogComments />
  </div>;
}

export default BlogDetails;
