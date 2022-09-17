// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example
// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: ["생산", "유틸리티", "사무", "기타"],
//     datasets: [
//       {
//         data: [70, 27, 2, 1],
//         backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
//         hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f6c23e"],
//         hoverBorderColor: "rgba(234, 236, 244, 1)",
//       },
//     ],
//   },
//   options: {
//     title: {
//       display: true,
//       text: "총 에너지사용량",
//     },
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: "#dddfeb",
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false,
//     },
//     cutoutPercentage: 80,
//   },
// });

// Pie Chart Example
// var ctx2 = document.getElementById("myPieChart2");
// var myPieChart2 = new Chart(ctx2, {
//   type: "doughnut",
//   data: {
//     labels: ["생산", "유틸리티", "사무", "기타"],
//     datasets: [
//       {
//         data: [45, 12, 13, 20],
//         backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
//         hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f6c23e"],
//         hoverBorderColor: "rgba(234, 236, 244, 1)",
//       },
//     ],
//   },
//   options: {
//     title: {
//       display: true,
//       text: "총 에너지비용",
//     },
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: "#dddfeb",
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false,
//     },
//     cutoutPercentage: 80,
//   },
// });

// Pie Chart Example
var ctx3 = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["생산", "유틸리티", "사무", "기타"],
    datasets: [
      {
        data: [60, 15, 15, 10],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f6c23e"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "총 CO2 배출량",
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});

// Pie Chart Example
var ctx4 = document.getElementById("myPieChart4");
var myPieChart4 = new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["생산", "유틸리티", "사무", "기타"],
    datasets: [
      {
        data: [15, 10, 15, 60],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f6c23e"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "온실가스 배출비용",
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});

// Pie Chart Example
var ctx5 = document.getElementById("myPieChart5");
var myPieChart5 = new Chart(ctx5, {
  type: "doughnut",
  data: {
    labels: [
      "Bracket",
      "Flange",
      "Elbow",
      "Housing",
      "Bearing cap",
      "Shaft",
      "Cone inlet",
      "C/A case",
      "Base plate",
      "Inner ring",
    ],
    datasets: [
      {
        data: [15, 12, 10, 7, 12, 17, 10, 5, 3, 8],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
          "#636363",
          "#997300",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
          "#636363",
          "#997300",
        ],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "총 용해량",
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});

// Pie Chart Example
var ctx6 = document.getElementById("myPieChart6");
var myPieChart6 = new Chart(ctx6, {
  type: "doughnut",
  data: {
    labels: [
      "Bracket",
      "Flange",
      "Elbow",
      "Housing",
      "Bearing cap",
      "Shaft",
      "Cone inlet",
      "C/A case",
      "Base plate",
      "Inner ring",
    ],
    datasets: [
      {
        data: [15, 12, 10, 7, 12, 17, 10, 5, 3, 8],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
          "#636363",
          "#997300",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
          "#636363",
          "#997300",
        ],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "총 제품생산량",
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
