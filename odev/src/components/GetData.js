import axios from 'axios';

async function GetData(userId) {
  try {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return {...user.data, posts: posts.data}
  } catch (error) {
    return error.message;
  }
};

export default GetData;
