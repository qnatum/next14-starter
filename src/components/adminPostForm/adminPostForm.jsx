"use client"

import { createPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
    const [state, formAction] = useFormState(createPost, undefined);

    return ( 
        <form action={formAction} className={styles.container}>
            <h1>Add New Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="slug" placeholder="slug" />
            <input type="text" name="img" placeholder="Image" />
            <textarea type="text" rows={10} name="desc" placeholder="Description" />
            <button>Add</button>
            {state && state.error}
        </form>
    );
};

export default AdminPostForm;