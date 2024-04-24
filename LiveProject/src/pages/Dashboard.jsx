import Card from 'react-bootstrap/Card';
import { redirect, redirectDocument } from 'react-router-dom';


export function Dashboard() {
    const getItem = localStorage.getItem("useInfo")

    const userData = JSON.parse(getItem);

    function userLogOut() {
        localStorage.removeItem("useInfo");
        return redirect("/");
    }

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Benvenuto {userData.userName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#" onClick={userLogOut}>Log out</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>

        </>
    )
}