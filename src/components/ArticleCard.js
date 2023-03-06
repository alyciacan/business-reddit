import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


const ArticleCard = ({ title, author, numComments, url }) => {
    return (
        <Card className="bg-dark article-card" style={{ "width": "34rem" }}>
                <Card.Body>
                    <Card.Text>
                        <a href={ url } target="_blank" className="reddit-link">{ title }</a>
                    </Card.Text>
                    <Stack direction="horizontal" className="card-footer">
                        <Card.Text className="text-primary">{ numComments } comments</Card.Text>
                        <Card.Text>submitted by { author }</Card.Text>
                    </Stack>
                </Card.Body>
        </Card>
    )
}


export default ArticleCard;