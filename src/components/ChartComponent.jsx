import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LinearScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, LinearScale, PointElement, Tooltip, Legend);

const ChartComponent = ({ tweetsData }) => {
  const [dataTweet, setDataTweet] = useState([]);

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Chart',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }
    ]
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Line Chart',
        data: [10, 20, 30, 40, 50],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      }
    ]
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  };

  const bubleData = {
    datasets: [
      {
        label: 'Positive',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Neutral',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    console.log(tweetsData);
    if (tweetsData.data && tweetsData.data.length) {
      setDataTweet(tweetsData.data);
      dataTweet.forEach(item => {
        let dataItem = {
          x: (item.labels.positive.confidence) * 100,
          y: (item.labels.negative.confidence) * 100,
          r: item.confidence,
        }
        let position = 0;
        item.prediction == 'positive' ? (position = 0) : item.prediction == 'negative' ? (position = 1) : (position = 2);
        datasets[position].push(dataItem);
      });
    }
  }, [tweetsData]);


  return (
    <div className='grid grid-cols-2'>
      <div className="col-span-2">
        <Bubble options={options} data={bubleData} />
      </div>
      <div className="col-span-1">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default ChartComponent;



