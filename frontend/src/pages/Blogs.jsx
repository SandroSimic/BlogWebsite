import Blog from "../components/Blog/Blog";
import BlogOperations from "../components/Blog/BlogOperations/BlogOperations";

function Blogs() {
  return <div>
    <BlogOperations />
    <main>
      <Blog />
    </main>
  </div>;
}

export default Blogs;
