
// Actions
import {getPosts} from "../api/request"
import * as actionTypes from "./actionTypes"

export const AddArticle = article => {
  return { 
    type: actionTypes.ADD_ARTICLE,
    article,
  }
}

export const simulateHttpRequest = (article)  => {
  console.log(article)
  return dispatch => {
    setTimeout(async ()=> {
      await getPosts()
      .then((res) => console.log(res.data.Posts))
      dispatch(AddArticle(article))
    },3000)
  }
}