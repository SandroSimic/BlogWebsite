import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import styles from './BlogComments.module.css'
import Comment from './Comment';
function BlogComments() {
  return <form className={styles.commentSection}>
    <div className={styles.comments}>
      <h2>Comments</h2>
      <Comment />
    </div>
    <div className={styles.addComment}>
      <h2>Add Comment</h2>
      <Input type='text' placeholder='Add Comment' className={styles.commentInput}/> 
    </div>

    <Button type='primary'  style={styles.commentBtn}>Add Comment</Button>
  </form>;
}

export default BlogComments;
