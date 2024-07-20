import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const getAllData = async () => {
  const todosUrl = "https://jsonplaceholder.typicode.com/todos?userId=";
  const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
  const { data: users } = await axios.get(url);

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    // GET all user todos
    const { data: userTodos } = await axios.get(todosUrl + user.id);
    user.todos = userTodos;

    // GET all user posts
    const { data: userPosts } = await axios.get(postsUrl + user.id);
    user.posts = userPosts;
  }
  return users;
};
