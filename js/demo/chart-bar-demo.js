// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

var ctx6 = document.getElementById("myBarChart6");
var myBarChart6 = new Chart(ctx6, {
  type: "bar",
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
        label: "En. Ex",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#4e73df",
        borderColor: "#4e73df",
        data: [14, 13, 10, 6, 12, 17, 10, 6, 4, 8],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});

var ctx5 = document.getElementById("myBarChart5");
var myBarChart5 = new Chart(ctx5, {
  type: "bar",
  data: {
    labels: [
      "용해",
      "조형",
      "사처리",
      "컨베이어",
      "탈형",
      "쇼트",
      "그라인딩",
      "압축공기",
      "집진기",
    ],
    datasets: [
      {
        label: "En. Ex",
        backgroundColor: "#fd7e14",
        hoverBackgroundColor: "#fd7e14",
        borderColor: "#fd7e14",
        data: [7, 9, 4, 3, 8, 1, 4, 10, 6],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "용해",
      "조형",
      "사처리",
      "컨베이어",
      "탈형",
      "쇼트",
      "그라인딩",
      "압축공기",
      "집진기",
    ],
    datasets: [
      {
        label: "에너지 역률",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [8, 4, 6, 2, 7, 9, 4, 1, 6],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});

var ctx2 = document.getElementById("myBarChart2");
var myBarChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "용해",
      "조형",
      "사처리",
      "컨베이어",
      "탈형",
      "쇼트",
      "그라인딩",
      "압축공기",
      "집진기",
    ],
    datasets: [
      {
        label: "En. Ex",
        backgroundColor: "#fd7e14",
        hoverBackgroundColor: "#fd7e14",
        borderColor: "#fd7e14",
        data: [70, 90, 40, 30, 80, 10, 40, 100, 60],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});

var ctx3 = document.getElementById("myBarChart3");
var myBarChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: [
      "용해",
      "조형",
      "사처리",
      "컨베이어",
      "탈형",
      "쇼트",
      "그라인딩",
      "압축공기",
      "집진기",
    ],
    datasets: [
      {
        label: "에너지 역률",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [8, 4, 6, 2, 7, 9, 4, 1, 6],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});

var ctx4 = document.getElementById("myBarChart4");
var myBarChart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "용해",
      "조형",
      "사처리",
      "컨베이어",
      "탈형",
      "쇼트",
      "그라인딩",
      "압축공기",
      "집진기",
    ],
    datasets: [
      {
        label: "En. Ex",
        backgroundColor: "#fd7e14",
        hoverBackgroundColor: "#fd7e14",
        borderColor: "#fd7e14",
        data: [70, 90, 40, 30, 80, 10, 40, 100, 60],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 9,
          },
          maxBarThickness: 25,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 10,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || "";
          return datasetLabel + " : " + number_format(tooltipItem.yLabel);
        },
      },
    },
  },
});
