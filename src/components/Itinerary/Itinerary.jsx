
import { useState } from "react";
import "../Itinerary/itinerary.css";
import { FaClock, FaMoneyBillAlt } from "react-icons/fa";

const Itinerary = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const {
    duration,
    hashtags,
    
    imagePerson,
    nameItinerary,
    namePerson,
    price,
    
  } = data;

 

  return (
    <div className="container-itinerary">
      <div className="person-info">
        
        <img src={imagePerson} alt="person-img" className="img-person" />
        <p className="namePerson">{namePerson}</p>
      </div>
      <h4 className="nameItinerary">{nameItinerary}</h4>
      <button
        className="btn btn-outline-primary btn-view-more"
        onClick={toggleDetails}
      >
        {showDetails ? " view more" : "view more"}
      </button>
      {showDetails && (
        <div className="itinerary-details">
          <h2>{nameItinerary}</h2>
          <h3>¡Under Construction!</h3>
          <button className="btn btn-danger btn-close-detail" onClick={closeDetails}>
            Close
          </button>
        </div>
      )}
      <div className="itinerary-info">
        <p>
          Price: ${price} <FaMoneyBillAlt size={25} color="green" />
        </p>
        <p>
          Duration: {duration} hs <FaClock size={15} />
        </p>
        <p>{hashtags}</p>
      </div>
    </div>
  );
};

export default Itinerary;
