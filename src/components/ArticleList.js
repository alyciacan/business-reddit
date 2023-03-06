import ArticleCard from './ArticleCard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


const ArticleList = ({ articles }) => {
    const [pageNum, setPageNum] = useState(0);

    const allCards = articles.map(article => {
            return ( 
                <ArticleCard 
                    title={ article.data.title }
                    author={ article.data.author }
                    numComments={ article.data.num_comments }
                    url={ article.data.url }
                    key= { article.data.id }
                />)
        }).slice(pageNum, (pageNum + 4))

    return (
        <section className="bg-dark">
            <Stack className="card-stack">
                { allCards }
            </Stack>
            <div className="button-box">
                <Button 
                    variant="primary" 
                    className="btn-main" 
                    onClick={ () => setPageNum(pageNum - 4) }
                    disabled={ pageNum<1 }
                >
                prev
                    </Button>
                    <Button variant="primary" className="btn-main" onClick={ () => setPageNum(pageNum + 4) }>next</Button>
            </div>
        </section>
    )
}

export default ArticleList;