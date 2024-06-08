import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ developer }) => {
  const activityMeta = [
    { label: "PR Open", fillColor: "#EF6B6B" },
    { label: "PR Merged", fillColor: "#61CDBB" },
    { label: "Commits", fillColor: "#FAC76E" },
    { label: "PR Reviewed", fillColor: "#C2528B" },
    { label: "PR Comments", fillColor: "#0396A6" },
    { label: "Incident Alerts", fillColor: "#5F50A9" },
    { label: "Incidents Resolved", fillColor: "#8F3519" },
  ];

  const totalActivity = developer.totalActivity;

  const labels = totalActivity.map((activity) => activity.name);
  const data = totalActivity.map((activity) => parseInt(activity.value));
  const backgroundColor = activityMeta.map((meta) => meta.fillColor);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className=" w-full h-full p-2 md:flex   justify-around">

      <Pie data={chartData} options={options} />

      <div className="flex flex-col justify-around p-5">
          {developer.totalActivity.map((activity) => (
            <div key={activity.name} className="flex justify-between text-lg">
              <h1 className="mr-4">{activity.name}</h1>
              <h1>{activity.value}</h1>
            </div>
          ))}
        </div>

    </div>
  );
};

export default PieChart;
