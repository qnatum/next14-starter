import Image from "next/image";
import styles from "./adminUsers.module.css"
import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";

const AdminUsers = async () => {

    const users = await getUsers();

    return ( 
        <div classname={styles.container}>
            <h1>Users</h1>
            {users.map((user) => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image src={user.img || "/noAvatar.png"} alt="" width={50} height={50}/>
                        <span className={styles.username}>{user.username}</span>
                    </div>
                    <div className={styles.buttons}>
                        <form>
                            <input type="hidden" name="id" value={user.id} />
                            <button className={styles.postUpdateButton}>Update</button>
                        </form>    
                        <form action={deleteUser}>
                            <input type="hidden" name="id" value={user.id} />
                            <button className={styles.postDeleteButton}>Delete</button>
                        </form>
                    </div>    
                </div>    
            ))}
        </div>
    )
}
export default AdminUsers;