import {createPost, deleteUser} from "@/lib/action"

const Component = () => {

    return ( 
    <div>
        <form action={createPost}>
            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="desc" name="desc" />
            <input type="text" placeholder="slug" name="slug" />
            <input type="text" placeholder="userId" name="userId" />
            <button>Create</button>
        </form>

        <form action={deleteUser}>
            <input type="text" placeholder="postId" name="id" />
            <button>Delete</button>
        </form>
    </div>
    )
}

export default Component;