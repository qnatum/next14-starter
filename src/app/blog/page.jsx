import PostCard from "@/components/postCard/postcard";
import styles from "./blog.module.css"
import {getPosts} from "@/lib/data"

// WITH API
const getData = async () => {
  const res = await fetch(`${process.env.DBACCESSAPI}/blog`, {next:{revalidate: 3600}})

  if (!res.ok) {
    throw new Error("Something went wrong") 
  }

  return res.json()
}

export const metadata = {
  title: "Blog Page",
  description: 'Next.js starter app blog page',
}

const BlogPage = async () => {

  // WITH API
  const posts = await getData()

  // WITHOUT API
  //const posts = await getPosts()

  console.log("-----------------POSTS---------------------")
  console.log(posts)
  console.log(posts[0].userId)

    return (
    <div className={styles.container}>

      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}

    </div>
  )};
  
  export default BlogPage;