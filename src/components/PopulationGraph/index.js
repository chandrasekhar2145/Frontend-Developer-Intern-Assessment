import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './index.css'

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    // Fetch population data from API
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => response.json())
      .then(data => {
        // Process data if needed
        setPopulationData(data);
      })
      .catch(error => console.error('Error fetching population data:', error));
  }, []);

  return (
    <div>
      {populationData && (
        <Line
          data={{
            labels: populationData.data.map(item => item.Year), // Assuming the year is available in data
            datasets: [{
              label: 'Population',
              data: populationData.data.map(item => item.Population), // Assuming population data is available
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }}
          options={{
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Population'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Year'
                }
              }
            }
          }}
        />
      )}
    </div>
  );
};

export default PopulationGraph;
