import Carousel from "react-bootstrap/Carousel";
import "../Carrousel/carousel.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

const slices = [
  {
    images: [
      {
        src: "public/buenos-aires.png",
        name: "Buenos Aires",
        country: "Argentina",
      },
      { src: "public/londres2.jpg", name: "Londres", country: "England" },
      { src: "public/ibiza2.jpg", name: "Ibiza", country: "Spain" },
      { src: "public/miami.jpg", name: "Miami", country: "United State" },
    ],
  },
  {
    images: [
      { src: "public/madrid.jpg", name: "Madrid", country: "Spain" },
      {
        src: "public/rio-de-janeiro2.jpg",
        name: "Rio de Janeiro",
        country: "Brasil",
      },
      { src: "public/bariloche.jpg", name: "Bariloche", country: "Argentina" },
      {
        src: "public/dubai.jpg",
        name: "Dubai",
        country: "United Arab Emirates",
      },
    ],
  },
  {
    images: [
      { src: "public/new-york.jpg", name: "New York", country: "United State" },
      { src: "public/sidney2.jpg", name: "Sidney", country: "Australia" },
      { src: "public/paris2.jpg", name: "Paris", country: "France" },
      { src: "public/toronto2.jpg", name: "Toronto", country: "Canada" },
    ],
  },
];
function CarouselComponent() {
  return (
    <Carousel>
      {slices.map((slice, index) => (
        <Carousel.Item key={index}>
          <div className="container">
            {slice.images.map((image, idx) => (
              <div key={idx} className="carousel-image-container">
                <img
                  key={idx}
                  className="img-carousel"
                  src={image.src}
                  alt={`Imagen ${index * 4 + idx + 1}`}
                />
                <Carousel.Caption className="title">
                  <h4>{image.name}</h4>
                  <span> <FaMapMarkerAlt size={18} color="red" />{image.country}</span>
                </Carousel.Caption>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
<div className="d-flex justify-content-between "></div>;
