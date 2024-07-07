import { Base } from "src/base";
import { NewPost, Post } from "./types";

export class Posts extends Base {

    getPostById(id: number): Promise<Post> {
        return this.invoke(`/posts/${id}`);
    }

    getPosts(): Promise<Post[]> {
        return this.invoke(`/posts`);
    }

    createPost(newPost: NewPost): Promise<Post> {
        return this.invoke('/posts', {
            method: "POST",
            body: JSON.stringify(newPost),
        })
    }
}