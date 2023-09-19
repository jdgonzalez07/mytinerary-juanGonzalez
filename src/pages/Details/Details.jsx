import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { Card } from "react-bootstrap";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getItinerary } from "../../redux/actions/citiesActions.js";
import Itinerary from "../../components/Itinerary/itinerary.jsx";

const Details = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  const city  = useSelector((store) => store.citiesReducer);
  const itinerary = useSelector((store) => store.citiesReducer.itinerary);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    dispatch(getCity({ _id }));
    dispatch(getItinerary({ _id }))
    .then(() => {
      setLoading(false); 
    })
    .catch((error) => {
      setLoading(false); 
      console.error("Error al cargar datos:", error);
    });
  }, []);

  if (loading) {
    // Muestra un loader mientras los datos se están cargando
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  

  

  return (
    <div className="container-details">
      <Anchor className="btn-details" to={"/cities"}>
        Back
      </Anchor>
      <div className="card card-detail">
        <Card.Img
          variant="top"
          src={city.city.src}
          style={{ height: "300px", objectFit: "cover" }}
          className="img-card-detail"
        />
        <div className="card-body">
          <Card.Title className="title-detail">{city.city.name}</Card.Title>
          <Card.Subtitle className="subtitle-detail">
            {city.city.country}
          </Card.Subtitle>
          <Card.Text className="text-detail">{city.city.description}</Card.Text>
          <Card.Text className="population-detail">
            {city.city.population}
          </Card.Text>
        </div>
        
      </div>
      {
        itinerary.map(itinerary => <Itinerary key={itinerary._id} data={itinerary}/> )
      }
     
 
    
    </div>
  );
};

export default Details;
