import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({ developer }) => {
  const activityMeta = [
    { label: "PR Open", fillColor: "#EF6B6B" },
    { label: "PR Merged", fillColor: "#61CDBB" },
    { label: "Commits", fillColor: "#FAC76E" },
    { label: "PR Reviewed", fillColor: "#C2528B" },
    { label: "PR Comments", fillColor: "#0396A6" },
    { label: "Incident Alerts", fillColor: "#5F50A9" },
    { label: "Incidents Resolved", fillColor: "#8F3519" },
  ];

  const dayWiseActivity = developer.dayWiseActivity;

  // Extract day-wise activity data
  const days = dayWiseActivity.map((day) => {
    const date = new Date(day.date);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const activityTypes = activityMeta.map((meta) => meta.label);
  const activityColors = activityMeta.map((meta) => meta.fillColor);

  const datasets = activityTypes.map((activity, index) => {
    const data = dayWiseActivity.map(
      (day) =>
        day.items.children.find((item) => item.label === activity)?.count || 0
    );

    return {
      label: activity,
      data,
      backgroundColor: activityColors[index],
      borderRadius: 5,
      
    };
  });

  const data = {
    labels: days,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Developer Activity Throughout the Week",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "black",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "black",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="w-full h-full p-2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
