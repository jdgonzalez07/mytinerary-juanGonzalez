import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { Card } from "react-bootstrap";
import { Link as Anchor } from "react-router-dom";

const Details = () => {
  const { _id } = useParams();
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cities/`);
        setCity(response.data.response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  const uniqueCity = city.find((info) => info._id == _id);
  console.log(uniqueCity);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-details">
      <Anchor className="btn-details" to={"/cities"}>Back</Anchor>
      <div className="card card-detail">
        
        <Card.Img
          variant="top"
          src={uniqueCity.src}
          style={{ height: "300px", objectFit: "cover" }}
          className="img-card-detail"
        />
        <div className="card-body">
          <Card.Title className="title-detail">{uniqueCity?.name}</Card.Title>
          <Card.Subtitle className="subtitle-detail">
            {uniqueCity?.country}
          </Card.Subtitle>
          <Card.Text className="text-detail">
            {uniqueCity?.description}
          </Card.Text>
          <Card.Text className="population-detail">
            {uniqueCity?.population}
          </Card.Text>
          {/* Mostrar otros detalles del producto */}
        </div>
      </div>
    </div>
  );
};

export default Details;
