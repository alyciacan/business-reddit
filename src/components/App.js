import './App.css'
import getArticles from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import ArticleList from './ArticleList';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect (() => {
    getArticles()
      .then(res => setArticles(res))
  }, [])

  // const logArticles = () => {
  //   articles.map(article => {
  //     console.log(article.data.title, article.data.author)
  //   })
  // }

  return (
    <div className="App">
      <ArticleList articles={ articles } />
    </div>
  );
}

export default App;
