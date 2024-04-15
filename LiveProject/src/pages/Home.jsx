import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Home() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setResult(json);
      });
  }, []);
  console.log(result);

  const styleDiv = {
    width: "100vw",
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2vw'
    
  };

  const styleCard = {
    width: '23vw',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={styleDiv}>
      {result &&
        result.map((prodotto) => (
          <Card style={styleCard} key={prodotto.id}>
            <Card.Img style={{height: '10vh', width: '10vh'}} variant="top" src={prodotto.image} />
            <Card.Body>
              <Card.Title>
                {prodotto.title}
                <br />
                {prodotto.price}€
              </Card.Title>
              <Card.Text>{prodotto.description}</Card.Text>
              <Button variant="primary">Acquista</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
