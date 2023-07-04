import styles from './BlogDetailsImages.module.css'
import dummyImg from '../../../images/dummyBlog.jpg'
import Input from '../../../ui/Input';

function BlogDetailsImages() {
  return <div className={styles.blogDetailsImages}>
    <div className={styles.images}>
        <img src={dummyImg} alt='blog image'/>
        <img src={dummyImg} alt='blog image'/>
        <img src={dummyImg} alt='blog image'/>
    </div>
    <Input type='file' labelText='Add Image' className={styles.button}/>
  </div>;
}

export default BlogDetailsImages;
