"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const createPost = async (prevState, formData) => {

    const {title, desc, slug, userId} = Object.fromEntries(formData);

    console.log(title, desc, slug, userId);

    try {
        connectDB();
        const newPost = new Post ({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();

        console.log("Saved to DB");

        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "failed to create post"}
    }
}

export const deletePost = async (formData) => {

    const {id} = Object.fromEntries(formData);

    console.log(id);

    try {
        connectDB();

        await Post.findByIdAndDelete(id);

        console.log("Saved to DB");

        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "failed to delete post"}
    }
}

export const createUser = async (prevState, formData) => {

    const {username, email, password, img} = Object.fromEntries(formData);

    console.log(username, email, password, img);

    try {
        connectDB();
        const newUser = new User ({
            username,
            email,
            password,
            img
        });

        await newUser.save();

        console.log("Saved to DB");

        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "failed to create user"}
    }
}

export const deleteUser = async (formData) => {

    const {id} = Object.fromEntries(formData);

    console.log(id);

    try {
        connectDB();

        await Post.deleteMany({userId: id});
        await User.findByIdAndDelete(id);

        console.log("Saved to DB");

        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "failed to delete user"}
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}

export const handleLogout = async () => {
    "use server";
    await signOut();
}

export const register = async(previousState, formData) => {
    const { username, email, password, confirmPassword } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        return {error: "Passwords do not match"};
    }

    try {

        connectDB();

        const user = await User.findOne({username});

        if (user) {
            return {error: "Username already exists"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        await newUser.save();
        console.log("Saved to DB");

        return {success: true};

    } catch (err) {
        console.log(err);
        return {error: "Something went wrong"};
    }
}

export const login = async(previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {

        await signIn("credentials", { username, password })

    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return {error: "Invalid username or password"}
        } else {
            throw(err);
        }
    }
}