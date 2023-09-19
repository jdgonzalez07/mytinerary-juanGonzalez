import { Card, Form, FormControl } from "react-bootstrap";
import "../CardsCities/cardscities.css";
import { useEffect, useRef, useState } from "react";
import { Link as Anchor } from "react-router-dom";
//import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCities, filterCities } from "../../redux/actions/citiesActions.js";

const CardsCities = () => {
  /* const [city, setCity] = useState([]); */
  const cities = useSelector((store) => store.citiesReducer);
  const searchItem = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCities())
    .then(() => {
      setLoading(false); // Marcar como cargado una vez se completan las llamadas
    })
    .catch((error) => {
      setLoading(false); // Manejar errores y marcar como cargado en caso de error
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

  /*   const [item, setItem] = useState("");
       const searchItem = (event) => {
     setItem(event.target.value);
  };
  

  const datafiltered = cities.filter((city) =>
    city.name.toLowerCase().startsWith(item.toLowerCase())
  );
 */

  const handleInput = () => {
    const search = searchItem.current.value;

    dispatch(filterCities(search))

    
  };

  

  return (
    <>
      <Form inline="true" className="input">
        <FormControl
          type="text"
          placeholder="Search yours cities "
          className="lg-3 input-search "
          onInput={handleInput}
          ref={searchItem}
        />
      </Form>
      <div className="card-list">
        {cities.filteredCities.length === 0 ? (
          <h1>¡ Try Again😢 !</h1>
        ) : (
          cities.filteredCities.map((item, index) => (
            <Card key={index} className="card-s m-4 card-cities">
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
