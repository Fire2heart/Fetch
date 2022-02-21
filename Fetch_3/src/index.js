import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const users = await axios.get(usersUrl);
const posts = await axios.get(postsUrl);
const comments = await axios.get(commentsUrl);

const addPost = () => {
    users.data.forEach((element) => {
        const postArr = posts.data.filter(obj => {
            return obj.userId === element.id;
        });          
        element.posts = postArr;
    });

    return users.data;
};
    
const addComment = () => {
    posts.data.forEach((element) => {
        const commentArr = comments.data.filter(obj => {
            return obj.postId === element.userId;
        });          
        element.comments = commentArr;
    });

    return users.data;
};

