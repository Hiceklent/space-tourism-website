import { useState, useEffect, useCallback } from 'react';
import { getDataDestinations } from '../services/axios-service';

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);


    const fetchDestinations = useCallback(() => {
        getDataDestinations()
            .then((response) => {
                setDestinations(response);
                setSelectedDestination(response[0]);
            })
            .catch((error) => console.warn(error));
    }, []);

    useEffect(() => {
        fetchDestinations();
    }, [fetchDestinations]);

    const selectDestination = (destinationName) => {
        const destination = destinations.find(dest => dest.name === destinationName);
        console.log('Selected Destination:', destination); // Debugging line
        setSelectedDestination(destination);
    };

    return { destinations, selectedDestination, selectDestination };
};

export default useDestinations;