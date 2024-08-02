import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css"
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// Data from API
const getData = async (slug) => {
  const res = await fetch(`${process.env.DBACCESSAPI}/blog/${slug}`)

  console.log("slug=")
  console.log(slug)
  console.log(res)

  return res.json()
}

export const generateMetadata = async ({params}) => {

  const {slug} = params;

  const post = await fetch(`${process.env.DBACCESSAPI}/blog/${slug}`)
  console.log(post);
  if (!post.ok) {
    return {
      title: "Blog",
      decsription: "Next.Js Tutorial"
    } 
  }

  return {
    title: post.title,
    description: post.desc
  };

}

const SingleBlogPage = async ({params}) => {

  const {slug} = params

    // From API
    const post = await getData(slug)
    if (!post.ok) {
      throw new Error("Something went wrong fetching the post") 
    }
  
    // Not from API
    // const post = await getPost(slug);

    console.log("AAA");
    console.log(post)
    // console.log(post.userId)
    // console.log(post.img)

    return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt="" className={styles.img} fill />
      </div>
      <div className={styles.postContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>
              Published
            </span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4,16)}
            </span>
          </div>
        </div>
        <div className={styles.description}>
          {post.desc}
        </div>
      </div>
    </div>
  )};
  
  export default SingleBlogPage;