import mongoose from"mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20      
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50      
        },
        password: {
            type: String,
        },
        img: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        createdAt: {
            type: Date,
        }
    },
    {timestamps: true}
);

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String
        },
        userId: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        createdAt: {
            type: Date,
        }
    },
    {timestamps: true}
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);