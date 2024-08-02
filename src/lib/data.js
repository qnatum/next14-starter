// const users = [
//     { 
//         id: 1,
//         name: "Robert Frost"
//     }, 
//     { 
//         id: 2,
//         name: "Willam Shakespeare"
//     }, 
//     { 
//         id: 3,
//         name: "John Bettjeman"
//     }
// ]

import { Post } from "./models";
import { User } from "./models";
import { connectDB } from "./utils";

// const posts = [
//     { 
//         id: 1,
//         userId: 1,
//         title: "American Poetry",
//         body: "Two paths diverged in a wood. I took the road less travelled..."
//     }, 
//     { 
//         id: 2,
//         userId: 2,
//         title: "Elizabethan Poetry",
//         body: "Infamy, infamy, that've all got it in for me..."
//     }, 
//     { 
//         id: 3,
//         userId: 3,
//         title: "British Poetry",
//         body: "The bells of waiting advent chime..."
//     }
// ]

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch posts")
    }
};

export const getPost = async (slug) => {
    try {
        connectDB();
        const post = await Post.findOne({slug});
        return post;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch post")
    }
};

export const getUser = async (userId) => {
    try {
        connectDB();
        console.log(userId);
        const user = await User.findById(userId);
        console.log(user);
        return user;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch user")
    }
};

export const getUsers = async () => {
    try {
        connectDB();
        const users = await User.find();
        return users;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch users")
    }
};



