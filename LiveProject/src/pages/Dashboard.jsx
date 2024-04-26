import Card from 'react-bootstrap/Card';
import { redirect, redirectDocument } from 'react-router-dom';
import {Menu} from '../components/Menu.jsx'


export function Dashboard() {
    const getUser = localStorage.getItem("useInfo")
    const getToken = localStorage.getItem("token")

    const userData = JSON.parse(getUser);

    function getUsersFunction() {
        return new Promise((resolve, reject) =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('APItoken', '1234')


    const requestOptions = {
      method: "GET",
      headers: myHeaders
      // redirect: "follow"
    };

    fetch("http://localhost:3000/getUsers", requestOptions)
    .then((res) => res.json())
    .then((json) => {
      resolve(json)
    })
    .catch((error) => reject(error));
        })
    }

    async function handleUsers() {
        try {
            const callUsers= await getUsersFunction()
            console.log(callUsers)
        } catch (error) {
            console.log(error)
        }
    }



    function userLogOut() {
        localStorage.removeItem("useInfo");
        return redirect("/");
    }

    return (
        <>
            <Menu/>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Benvenuto {userData.userName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#" onClick={userLogOut}>Log out</Card.Link>
                    <Card.Link href="#" onClick={handleUsers}>Get users</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>

        </>
    )
}