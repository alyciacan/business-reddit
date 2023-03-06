import ArticleCard from './ArticleCard';
import { useState } from 'react';


const ArticleList = ({ articles }) => {
    const [pageNum, setPageNum] = useState(0);

    const allCards = articles.map(article => {
            return ( 
                <ArticleCard 
                    title={ article.data.title }
                    author={ article.data.author }
                    key= { article.data.id }
                />)
        }).slice(pageNum, (pageNum + 4))

    return (
        <section>
            { allCards }
            <div>
                <button onClick={ () => setPageNum(pageNum - 4) }>prev</button>
                <button onClick={ () => setPageNum(pageNum + 4) }>next</button>
            </div>
        </section>
    )
}

export default ArticleList;