import { comments as data } from "../data/comments";
import { generateId } from "../utils";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  return comments.find((comment) => comment.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((comment) => comment.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        ...body,
      };
    }

    return comment;
  });

  console.log(`Comment #${id} has been updated.`);
}

export function deleteCommentById(id) {
  //delete comment by id
  comments = comments.filter((comment) => comment.id !== id);
  console.log(`Comment #${id} has been deleted.`);
  return comments;
}

export function getAllComments() {
  // test function for checking comments
  return [...comments];
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  // const postCommentsCount = new Set(comments.map(comment => comment.postId)).size;

  // get list of distinct postIds
  const postComments = [...new Set(comments.map(comment => comment.postId))];

  let newComment = {
    postId: generateId(postComments),
    id: generateId(comments),
    name: "unnamed",
    email: "example@foo.com",
    body: comment
  };

  comments.push(newComment);
  console.log("New comment added.");
}
