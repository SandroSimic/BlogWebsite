/* eslint-disable react/prop-types */
import styles from "./Blog.module.css"

function Blog({title, author, date, image}) {
  return (
    <div className={styles.blog}>
      <div className={styles.blogWrapper}>
        <div className={styles.imgContainer}>
          <img src={image} alt="blog img1" />
        </div>
        <div className={styles.blogInfo}>
          <h1>{title}</h1>
          <p>{author}</p>
        </div>
      </div>
      <p className={styles.blogDate}>{date}</p>
    </div>
  )
}

export default Blog
