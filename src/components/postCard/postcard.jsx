import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = ({post}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src={post.img} alt="" fill className={styles.image} />
                </div>
                <span className={styles.date}>
                    01.01.2024
                </span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>
                    {post.title}
                </div>
                <p className={styles.description}>
                    {post.body}
                </p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>Read</Link>
            </div>
        </div>
    )
}
export default PostCard;