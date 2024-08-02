import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import styles from "./admin.module.css"
import AdminUsers from "@/components/AdminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { Suspense } from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
    
    const session = await auth();
  
    return (
    <div className={styles.container}>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminPostForm userId={session.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUserForm />
        </div>
      </div>

    </div>
  )};
  
  export default AdminPage;