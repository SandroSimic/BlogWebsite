import Blog from "../components/Blog/Blog"
import BlogOperations from "../components/Blog/BlogOperations/BlogOperations"
import TopTable from "../ui/TopTable"

import styles from "./Blogs.module.css"

function Blogs() {
  return (
    <div>
      <BlogOperations />
      <main className={styles.main}>
        <div className={styles.blogs}>
          <Blog
            title="Putovanje u Moskvu"
            author="Sandro Simic"
            image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            date="2023-10-1"
            allow={true}
          />
          <Blog
            title="Putovanje u Moskvu"
            author="Sandro Simic"
            image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            date="2023-10-1"
            allow={true}
          />
        </div>
        <div className={styles.tables}>
          <TopTable type="blogs" />
          <TopTable type="Author" />
        </div>
      </main>
    </div>
  )
}

export default Blogs
