import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LinearScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, LinearScale, PointElement, Tooltip, Legend);

const ChartComponent = ({ tweetsData }) => {
  let ubleData = {
    datasets: [
      {
        label: 'Positive',
        data: [],
        borderColor: 'green',
        backgroundColor: 'rgba(237, 213, 173, 0.5)',
      },
      {
        label: 'Negative',
        data: [],
        borderColor: 'red',
        backgroundColor: 'rgba(237, 213, 173, 0.5)',
      },
      {
        label: 'Neutral',
        data: [],
        borderColor: 'blue',
        backgroundColor: 'rgba(237, 213, 173, 0.5)',
      },
    ],
  }
  const [bubbleData, setBubbleData] = useState(ubleData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comentarios'
      }
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const label = tooltipItem.comment;
          return label + ': ' + tooltipItem.xLabel + '% negativo, ' + tooltipItem.yLabel + '% positivo';
        },
      }
    }
  };

  useEffect(() => {
    if (tweetsData.data && tweetsData.data.length) {
      let data = tweetsData.data;
      // setDataTweet(tweetsData.data);
      // console.log(dataTweet);
      data.forEach(item => {
        let comment = item.input;
        let dataItem = {
          x: (item.labels.negative.confidence) * 100,
          y: (item.labels.positive.confidence) * 100,
          r: item.confidence * 10,
          comment: comment
        }
        let position = 0;
        item.prediction == 'positive' ? (position = 0) : item.prediction == 'negative' ? (position = 1) : (position = 2);
        ubleData.datasets[position].data.push(dataItem);
      });
      setBubbleData(ubleData);
    }
  }, [tweetsData]);


  return (
    <div className='grid grid-cols-2'>
      <div className="col-span-2">
        <Bubble options={options} data={bubbleData} />
        <p className="text-center"><small>En una muestra de 90 comentarios del tweet</small></p>
      </div>
    </div>
  );
};

export default ChartComponent;



