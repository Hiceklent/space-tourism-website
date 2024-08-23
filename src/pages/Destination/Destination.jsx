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
    <section className="w-full h-screen bg-destination-mobile md:bg-destination-desktop bg-no-repeat bg-center bg-cover">
      <div className="destination-page-wrapper">
        <div className="destination-page-content-left">
          <div className="destination-page-content-left-1">


            {isDestinationSelected ? (
              <>
                <span>{selectedDestination.id.toString()}</span>
              </>
            ) : (
              <p>Loading...</p>
            )}

            <p>Pick your destination</p>
            <figure>
              <img
                src={selectedDestination.images.webp}
                alt={selectedDestination.name}
              />
            </figure>
          </div>
        </div>

        <ul>
          {destinations.map((destination) => (
            <li
              id={destination.id}
              key={destination.name}
              className="destination-page-content-nav-item cursor-pointer"
              onClick={() => handleDestinationClick(destination.name)}
            >
              {destination.name}
            </li>
          ))}

        </ul>


        <div className="destination-page-content-right-1">
          <h1>{selectedDestination.name}</h1>
        </div>

        <div className="destination-page-content-right-2">
          <p>{selectedDestination.description}</p>
        </div>
        <div className="destination-page-content-line"></div>
        <div className="destination-page-content-right-3">
          <div>
            <span>Avg. Distance</span>
            <p>{selectedDestination.distance}</p>
          </div>
          <div>
            <span>Est. travel time</span>
            <p>{selectedDestination.travel}</p>
          </div>
        </div>


      </div>
    </section>
  ) : (
    <div className="w-full h-screen bg-destination-mobile md:bg-destination-desktop bg-no-repeat bg-center bg-cover">Load ...</div>
  )

}

export default Destination