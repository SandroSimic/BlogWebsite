/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Input from "../../ui/Input"
import styles from "./Blog.module.css"

function Blog({title, author, date, image, allow = false, favorite = false}) {


  if(allow === false) {
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
      <Input type='checkbox'/>
    </div>
  )
  }


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
