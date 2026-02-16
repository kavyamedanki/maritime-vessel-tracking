import { useEffect, useState } from "react";
import API from "../services/api";

function Vessels() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    fetchVessels();
  }, []);

  const fetchVessels = async () => {
    try {
      const response = await API.get("/vessels/");
      setVessels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Vessel List</h2>

      {vessels.map((vessel) => (
        <div key={vessel.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{vessel.name}</h3>
          <p>Type: {vessel.vessel_type}</p>
          <p>Flag: {vessel.flag}</p>
          <p>Position: {vessel.current_latitude}, {vessel.current_longitude}</p>
          <p>Speed: {vessel.current_speed} knots</p>
          <p>Destination: {vessel.destination}</p>
        </div>
      ))}
    </div>
  );
}

export default Vessels;
