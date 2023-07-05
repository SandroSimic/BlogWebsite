import Blog from "../components/Blog/Blog"
import Button from './../ui/Button'
import styles from './AllowBlogs.module.css'
function AllowedBlogs() {
  return (
    <form className={styles.allowedBlogs}>
    <div className={styles.blogs}>
      <Blog
        title="Putovanje u Moskvu"
        author="Sandro Simic"
        image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2023-10-1"
      />
      <Blog
        title="Putovanje u Moskvu"
        author="Sandro Simic"
        image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2023-10-1"
      />
    </div>

      <Button type='primary' style={styles.allowBtn}>Allow Blogs</Button>
    </form>
  )
}

export default AllowedBlogs
