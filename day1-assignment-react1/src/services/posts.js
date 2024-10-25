import { posts as data } from "../data/posts";
import { generateId } from "../utils";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.find((post) => post.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((post) => post.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.

  // get list of distinct userIds
  const postUserIds = [...new Set(posts.map((post) => post.userId))];

  let newPost = {
    userId: generateId(postUserIds),
    id: generateId(posts),
    title: (post.title !== undefined)? post.title : "Untitled",
    body: (post.body !== undefined)? post.body : "No content"
  }

  posts.push(newPost)
  console.log("New post added");
}

export function updatePostTitle(id, title) {
  //update post title
  const existingPostIdx = posts.findIndex((post) => post.id === id);

  if(existingPostIdx) {
    posts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          ...title,
        };
      }
  
      return post;
    });

    console.log(`Post#${id} title has been updated.`);
  } else {
    console.log(`Post with #${id} not found.`);
  }

}

export function updatePostBody(id, body) {
  //update post body
  const existingPostIdx = posts.findIndex((post) => post.id === id);

  if(existingPostIdx) {
    posts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          ...body,
        };
      }
  
      return post;
    });

    console.log(`Post#${id} body has been updated.`);
  } else {
    console.log(`Post with #${id} not found.`);
  }
  
}

export function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  const existingPost = posts.find((post) => post.id === id);

  if(existingPost) {
    if (post.title !== undefined) existingPost.title = post.title;
    if (post.body !== undefined) existingPost.body = post.body;

    console.log(`Post#${id} has been updated.`);
  } else {
    console.log(`Post with #${id} not found.`);
  }
}

export function deletePostById(id) {
  //delete post by id
  posts = posts.filter((post) => post.id !== id);
  console.log(`Post#${id} has been deleted.`);
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  posts = posts.filter((post) => post.userId !== userId);
  console.log(`Posts with userId#${userId} has been deleted.`);
}
