import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import for creating links

const SpacecraftList = () => {
  const [spacecraft, setSpacecraft] = useState([]);

  useEffect(() => {
    const fetchSpacecraft = async () => {
      try {
        const response = await axios.get('/api/spacecraft');
        setSpacecraft(response.data);
      } catch (error) {
        console.error('Error fetching spacecraft:', error);
      }
    };

    fetchSpacecraft();
  }, []);

  return (
    <div className="spacecraft-list">
      <h2>Available Spacecraft</h2>
      <ul>
        {spacecraft.map((spacecraft) => (
          <li key={spacecraft.id}>
            <Link to={`/spacecraft/${spacecraft.id}`}>
              {spacecraft.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpacecraftList;