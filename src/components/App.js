import './App.css'
import getArticles from '../utils/apiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect (() => {
    getArticles()
      .then(res => setArticles(res))
      .then(() => logArticles())
  }, [])

  const logArticles = () => {
    articles.map(article => {
      console.log(article.data.title, article.data.author)
    })
  }

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
