import { Link as Anchor } from "react-router-dom";
import CarouselComponent from "../Carrousel/Carousel";
import "./hero.css";


const Hero = () => {
  return (
    <div className="app-hero">
      <main>
        <section className="section-hero">
          <h3>
            Find your perfect trip, designed by inside who know and love their
            cities!.
          </h3>
          <p>
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <div className="container-anchor">
          <Anchor className="anchor-hero" to={"/cities"}>View more</Anchor></div>
        </section>
        <section>
          <div className="carrousel">
            <h2>Popular Mytiniraries</h2>
            <CarouselComponent />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
