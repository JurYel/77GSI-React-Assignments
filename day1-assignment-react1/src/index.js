//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers } from "./services/users";
import { 
        addComment, getAllComments,
        deleteCommentById, updateCommentBody,
        getCommentById, getCommentsByPostId
 } from "./services/comments";
 import { getPosts, updatePost, getPostsByUser,
    getPostById, addPost, updatePostTitle, updatePostBody,
    deletePostById, deletePostsByUserId
  } from "./services/posts";

// updateUser(1, { email: "roger@88.com" });
// console.log(getAllUsers());

// Comments: Test for addComment
addComment("Sample comment");
addComment("Sample comment");
addComment("Sample comment");
console.log(getAllComments());

// Comments: Test for deleteCommentById
deleteCommentById(501001);
console.log(getAllComments());

// Comments: Test for updateCommentById
updateCommentBody(502001, {name: "Juriel Botoy", email: "juriel.botoy@foo.com", body: "Great work!"});
console.log(getAllComments());

// Comments: Test for getCommentById()
console.log(getCommentById(502001));

// Comments: Test for getCommentsByPostId()
console.log(getCommentsByPostId(100));

// Posts: Test for getPostById()
console.log(getPostById(100));

// Posts: Test for getPostByUserId()
console.log(getPostsByUser(10));

// Posts: Test for addPost()
addPost({title: "The Rise of the Apes", body: "About the rise of the apes."});
addPost({title: "How to get rid of Hallucinations in LLMs", body: "Using contextual RAG for reducing hallucinations."});
addPost({title: "KISS: Keep it simple, stupid", body: "Benefits of keeping it all simple."});
console.log(getPosts());

// Posts: Test for updatePostTitle()
updatePostTitle(99, {title: "Effects of Synthenol"});
console.log(getPosts())

// Posts: Test for updatePostBody()
updatePostBody(98, {body: "Jack and the beanstalk"});
console.log(getPosts());

// Posts: Test for updatePost();
updatePost(100, {title: "Sample title", body: "Sample body"});
console.log(getPosts());

// Posts: Tests for deletePostById()
deletePostById(97);
console.log(getPosts());

// Posts: Test for deletePostsByUserId()
deletePostsByUserId(8);
console.log(getPosts());