import React from "react"
import { connect } from "react-redux"

import Article from "./Article/Article"
import AddArticle from "./AddArticle/AddArticle"
import { simulateHttpRequest } from "../store/actionCreators"

const Articles = ({ articles, saveArticle }) => (
  <div>
    <AddArticle saveArticle={saveArticle} />
    {articles.map(article => (
      <Article key={article.id} article={article} />
    ))}
  </div>
)

// Obter nosso estado da store (Redux)
const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  }
}

// dispatch
const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article =>
      dispatch(simulateHttpRequest(article)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles)