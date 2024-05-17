import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const MyBarChart = ({ progressData }) => {
  const chartRef = useRef(null);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });
  const todayEntry = progressData.find((entry) => entry.date === currentDate);
  const percentageForToday = todayEntry ? todayEntry.percentage : 0;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: progressData.map((entry) => entry.date),
      datasets: [
        {
          label: "Percentage",
          data: [92, 45, 98, 90, 84, 82, percentageForToday],
          backgroundColor: "#5A92CB",
          borderColor: "none",
          borderWidth: 0,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        datalabels: {
          color: "#ffffff",
          anchor: "end",
          align: "top",
          formatter: (value) => `${value}`,
        },
      },
      scales: {
        x: {
          // display: false,
          ticks: { color: "#A3A3A3" },
          grid: { display: false },
        },
        y: {
          // display: false,
          beginAtZero: true,
          ticks: {
            color: "#A3A3A3",
            stepSize: 20,
            callback: function (value) {
              return value + "%"; // Add '%' to y-axis labels
            },
          },
          grid: { display: false },
        },
      },
    };

    Chart.register(ChartDataLabels);

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [todayEntry.percentage]);

  return (
    <div className="mt-8 bg-[#282828] h-64 rounded-xl p-4  flex justify-center items-center">
      <div className="h-56">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default MyBarChart;
