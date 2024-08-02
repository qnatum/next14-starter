import { getUser } from "@/lib/data";
import styles from "./postUser.module.css"
import Image from "next/image";

// USING API
//   const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})
  
//     if (!res.ok) {
//         throw new Error("Something else went wrong") 
//     }
      
//     return res.json()
//   }
  
  const PostUser = async (userId) => {

    // Using API
    // const user = await getData(userId)

console.log("PU...");
console.log(userId);

    // Not using API
    const user = await getUser(userId.userId);

    return ( 
      <div className={styles.container}>
    
        <Image 
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        />
    
        <div className={styles.texts}>
          <span className={styles.title}>
            Author
          </span>
          <span className={styles.username}>
            {user.username}
          </span>
        </div>
      </div>
)
}
export default PostUser;