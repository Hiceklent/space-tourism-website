import useDestinations from '../../hooks/useDestination';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Destination = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations, selectedDestination, selectDestination } = useDestinations();
  const isDestinationSelected = selectedDestination && selectedDestination.id;


  useEffect(() => {
    if (destinations.length > 0) {
      const destinationId = id ? id.toLowerCase() : destinations[0].name.toLowerCase();
      const selectedDest = destinations.find(destination => destination.name.toLowerCase() === destinationId);

      if (selectedDest) {
        selectDestination(selectedDest.name);
      } else {
        console.warn('Destino no encontrado');
        selectDestination(destinations[0].name);
      }
    }
  }, [id, destinations, selectDestination]);


  const handleDestinationClick = (name) => {
    selectDestination(name);
    navigate(`/destination/${name.toLowerCase()}`); // Cambia la URL al seleccionar un destino
  };

  return destinations && selectedDestination ? (
    <section className="w-full h-screen bg-destination-mobile md:bg-destination-desktop bg-no-repeat bg-center bg-cover flex flex-col items-center">
      <div className="text-center md:text-left mt-8 md:mt-16">
        <span className="text-gray-400 font-bold tracking-widest text-lg md:text-2xl">
          01
        </span>
        <p className="text-white uppercase text-lg md:text-2xl tracking-widest">
          Pick your destination
        </p>
      </div>
      <div className="destination-page-wrapper flex flex-col items-center md:flex-row md:justify-between w-full max-w-6xl mt-8 md:mt-16">
        <figure className="mb-8 md:mb-0">
          <img
            src={selectedDestination.images.webp}
            alt={selectedDestination.name}
            className="w-72 md:w-96"
          />
        </figure>

        <div className="destination-content flex flex-col items-center md:items-start text-center md:text-left">
          <ul className="flex space-x-6 mb-8 text-lg">
            {destinations.map((destination) => (
              <li
                key={destination.name}
                className={`cursor-pointer uppercase tracking-widest ${destination.name === selectedDestination.name ? 'border-b-2 border-white text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => handleDestinationClick(destination.name)}
              >
                {destination.name}
              </li>
            ))}
          </ul>

          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-4">
            {selectedDestination.name}
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-md mb-8">
            {selectedDestination.description}
          </p>

          <div className="border-t border-gray-700 w-full my-8"></div>

          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <span className="block text-gray-400 uppercase text-sm tracking-widest">Avg. Distance</span>
              <p className="text-white text-2xl md:text-4xl font-bold">{selectedDestination.distance}</p>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-gray-400 uppercase text-sm tracking-widest">Est. Travel Time</span>
              <p className="text-white text-2xl md:text-4xl font-bold">{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="w-full h-screen bg-destination-mobile md:bg-destination-desktop bg-no-repeat bg-center bg-cover">Loading...</div>
  );
}


export default Destination