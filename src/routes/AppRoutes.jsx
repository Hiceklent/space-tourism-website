import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import Home from "../pages/Home/Home.jsx"
import Crew from "../pages/Crew/Crew.jsx"
import Destination from "../pages/Destination/Destination.jsx"
import Technology from "../pages/Technology/Technology.jsx"
import NotFound404 from "../pages/NotFound404/NotFound404.jsx"
import Layout from "../components/Layout/Layout.jsx"
import { getDestinations } from "../services/axios-service.js";

  const AppRouter = () => {
    const [destinations, setDestinations] = useState([]);
  
    const fetchDestinations = useCallback(() => {
      getDestinations()
        .then((response) => {
          setDestinations(response);
        })
        .catch((error) => console.warn(error));
    }, []);
  
    useEffect(() => {
      fetchDestinations();
    }, [fetchDestinations]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:destinationsId" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter