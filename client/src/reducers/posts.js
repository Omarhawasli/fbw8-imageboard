/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE , UPDATE, DELETE, COUNT } from "../constansts/actionTypes"


export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      case "CREATE":
        return [...posts, action.payload];
    case "UPDATE":
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    case "DELETE":
      return posts.filter((post) => (post._id !== action.payload )) //filter return all post exept the deleted post
    case "COUNT":
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    default: 
      return posts;
  }
};
