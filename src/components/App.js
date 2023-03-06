import './App.css'
import getArticles from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import ArticleList from './ArticleList';

function App() {
  const [articles, setArticles] = useState([]);


  useEffect (() => {
    let beforeId = null;
    if(articles.length) {
      beforeId = `&${articles[0].name}`
    };

    getArticles(beforeId)
      .then(res => setArticles(res))
  }, [])

  return (
    <div className="App">
      <h1>r/Business</h1>
      <ArticleList articles={ articles }  />
    </div>
  );
}

export default App;
