import { Card, Form, FormControl } from "react-bootstrap";
import "../CardsCities/cardscities.css";
import { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
//import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const CardsCities = () => {
  const [city, setCity] = useState([]);

  try {
    useEffect(() => {
      axios("http://localhost:3000/api/cities").then((res) =>
        setCity(res.data.response)
      );
    }, []);
  } catch (error) {
    console.log(error);
  }

  const [item, setItem] = useState("");

  const searchItem = (event) => {
    setItem(event.target.value);
  };

  const datafiltered = city.filter((city) =>
    city.name.toLowerCase().startsWith(item.toLowerCase())
  );

  return (
    <>
      <Form inline="true" className="input">
        <FormControl
          type="text"
          placeholder="Search yours cities "
          className="lg-3 input-search "
          onChange={searchItem}
        />
      </Form>
      <div className="card-list">
        {datafiltered.length === 0 ? (
          <h1>¡ Try Again😢 !</h1>
        ) : (
          datafiltered.map((item, index) => (
            <Card key={index} className="card-s m-4">
              <Card.Img
                variant="top"
                src={item.src}
                style={{ height: "200px", objectFit: "cover" }}
                className="img-card"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.country}</Card.Text>
                <Anchor
                  to={`/details/${item._id}`}
                  className="btn-card"
                  variant="primary"
                >
                  Ver más
                </Anchor>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default CardsCities;
{
  /*  <Button variant="outline-primary" className="mt-2">
          Search <AiOutlineSearch />
        </Button> */
}
