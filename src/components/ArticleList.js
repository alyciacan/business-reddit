import ArticleCard from './ArticleCard';


const ArticleList = ({ articles }) => {
    const allCards = () => {
      return articles.map(article => {
            return ( 
                <ArticleCard 
                    title={ article.data.title }
                    author={ article.data.author }
                    key= { article.data.id }
                />)
        })
    }

    return (
        <section>
            { allCards() }
        </section>
    )
}

export default ArticleList;