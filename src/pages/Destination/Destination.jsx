import {useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDestinationsById } from '../../services/axios-service';

const Destination = () => {
  const navigate = useNavigate();
  const { destinationsId } = useParams();
  console.log(destinationsId);
  const [ destinations, setDestinations ] = useState({});

  const fetchDestinationsById = useCallback(() => {
    if (destinationsId) {
      getDestinationsById(destinationsId)
        .then((response) => {
          setDestinations(response);
        })
        .catch((error) => console.warn(error));
    } else {
      console.error("No se encontró el ID de la destinación.");
    }
  }, [destinationsId]);

  useEffect(() => {
    console.log("ID recibido desde useParams:", destinationsId);
    fetchDestinationsById();
  }, [fetchDestinationsById]);
  console.log(destinationsId);

  if (!destination) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full h-screen bg-destination-mobile md:bg-destination-desktop bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        {/* Left Section */}
        <div className="text-white space-y-8 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-4 uppercase tracking-widest text-gray-400">
            <span className="font-bold">01</span>
            <p className="text-lg">Pick your destination</p>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-white flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          {/* Navigation */}
          <nav className="flex space-x-6 text-lg tracking-widest uppercase">
            {["Moon", "Mars", "Europa", "Titan"].map((name) => (
              <span
                key={name}
                className={`cursor-pointer hover:border-b-2 hover:border-white ${
                  destination.name === name ? "border-b-2 border-white" : ""
                }`}
              >
                {name}
              </span>
            ))}
          </nav>

          {/* Destination Details */}
          <div>
            <h1 className="text-6xl font-bold uppercase">{destination.name}</h1>
            <p className="text-lg leading-relaxed text-gray-300 mt-4 max-w-md">
              {destination.description}
            </p>
          </div>

          {/* Line Divider */}
          <div className="w-full h-px bg-gray-600"></div>

          {/* Additional Info */}
          <div className="flex space-x-12 text-gray-400">
            <div className="flex flex-col space-y-2">
              <span className="uppercase text-sm tracking-widest">Avg. Distance</span>
              <p className="text-2xl text-white font-semibold">
                {destination.distance}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="uppercase text-sm tracking-widest">Est. Travel Time</span>
              <p className="text-2xl text-white font-semibold">
                {destination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination