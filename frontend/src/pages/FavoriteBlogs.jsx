import Blog from "../components/Blog/Blog"

function FavoriteBlogs() {
  return (
    <>
      <Blog
        title="Putovanje u Moskvu"
        author="Sandro Simic"
        image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2023-10-1"
        favorite={true}
        allow={true}
      />
      <Blog
        title="Putovanje u Moskvu"
        author="Sandro Simic"
        image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2023-10-1"
        favorite={true}
        allow={true}
      />
    </>
  )
}

export default FavoriteBlogs
