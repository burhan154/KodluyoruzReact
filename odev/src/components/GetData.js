import axios from 'axios';

async function GetData(userId) {
  try {
    //Gets user and post datas
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    //Returns merged data
    return {...user.data, posts: posts.data}
  } catch (error) {
    return error.message;
  }
};

export default GetData;
