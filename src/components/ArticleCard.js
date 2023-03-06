import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


const ArticleCard = ({ title, author, numComments }) => {
    return (
        <Card className="bg-dark article-card" style={{ "width": "34rem" }}>
            <Card.Body>
                <Card.Text>{ title }</Card.Text>
                <Stack direction="horizontal" className="card-footer">
                    <Card.Link>{ numComments } comments</Card.Link>
                    <Card.Text>submitted by { author }</Card.Text>
                </Stack>
            </Card.Body>
        </Card>
    )
}


export default ArticleCard;