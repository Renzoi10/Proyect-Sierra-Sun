/* TODO: ESTILOS DE GRAFICAS COMBINADAS*/
stylesCombinadas = {
  /*Estilos de la leyenda */
  legend: {
    display: false
  },

  responsive: true,
  /*Estilos del apartado de cuadro de info (Popover) */
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 10,
    yPadding: 10,
    bodyFontSize: 15,
    bodySpacing: 5,
    mode: 'x',
  },
  elements: {
    //Estilos apartado de las lineas(Curvas)
    line: {
      borderWidth: 3,
      borderColor: 'rgba(52, 73, 94,0.8)',
      backgroundColor: 'rgba(52, 73, 94,0.7)',
    },
    //Estilos apartado de los picos(puntos)
    point: {
      radius: 6,
      borderWidth: 3,
      borderColor: 'rgba(255, 218, 121,1.0)',
      backgroundColor: 'rgba(52, 73, 94,0.8)',
      hoverRadius: 8,
      hoverBorderWidth: 3,
    }
  },
  /* ESTILOS DE DATOS DEL EJE "Y" */
  scales: {
    yAxes: [{
      barPercentage: 0.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE Y  */
        fontColor: "white"
      }
    }],
    /* ESTILOS DE DATOS DEL EJE "X" */
    xAxes: [{
      barPercentage: 0.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE X  */
        fontColor: "white"
      }
    }]
  }
}



/* TODO: ESTILOS DE GRAFICAS COMBINADAS - II*/
stylesCombinadas2 = {
  /*Estilos de la leyenda */
  legend: {
    display: false
  },

  responsive: true,
  /*Estilos del apartado de cuadro de info (Popover) */
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 10,
    yPadding: 10,
    bodyFontSize: 15,
    bodySpacing: 5,
    mode: 'x',
  },
  elements: {
    //Estilos apartado de las lineas(Curvas)
    line: {
      borderWidth: 3,
      borderColor: 'rgba(241, 196, 15,0.8)',
      backgroundColor: 'rgba(44, 62, 80, 0.3)',
    },
    //Estilos apartado de los picos(puntos)
    point: {
      radius: 5,
      borderWidth: 3,
      borderColor: 'rgba(255, 218, 121,1.0)',
      backgroundColor: 'rgba(44, 62, 80,0.8)',
      hoverRadius: 8,
      hoverBorderWidth: 3,
    }
  },
  /* ESTILOS DE DATOS DEL EJE "Y" */
  scales: {
    yAxes: [{
      barPercentage: 0.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE Y  */
        fontColor: "white"
      }
    }],
    /* ESTILOS DE DATOS DEL EJE "X" */
    xAxes: [{
      barPercentage: 0.5,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE X  */
        fontColor: "white"
      }
    }]
  }
}


/* TODO: ESTILOS DE GRAFICAS DE BARRAS*/
stylesBarras = {
  /*Estilos de la leyenda */
  legend: {
    display: false
  },
  responsive: true,
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 10,
    yPadding: 10,
    bodyFontSize: 15,
    bodySpacing: 5

  },
  /* ESTILOS DE DATOS DEL EJE "Y" */
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE Y  */
        fontColor: "white"
      }
    }],
    /* ESTILOS DE DATOS DEL EJE "X" */
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        /* COLOR DE FUENTE DE LOS DATOS DEL EJE X  */
        fontColor: "white"
      }
    }]
  }
}


/* TODO: ESTILOS DE GRAFICAS DE TIPO DONA - II*/
stylesTipoDONA2 = {
  maintainAspectRatio: true,
  legend: {
    display: true,
    position: 'left',
    labels: {
      fontSize: 18,
      padding: 5,
      boxWidth: 18,
      fontColor: 'white',
      fontFamily: 'system-ui'
    }
  },
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 10,
    yPadding: 10,
    bodyFontSize: 15,
    bodySpacing: 5,
    mode: "nearest",
    intersect: 5,
    position: "nearest"
  },
  responsive: true,

};


/* TODO: ESTILOS DE GRAFICAS DE TIPO DONA*/
stylesTipoDONA = {
  maintainAspectRatio: true,
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      padding: 5,
      boxWidth: 15,
      fontColor: 'white',
      fontFamily: 'system-ui',
    }
  },
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 7,
    yPadding: 7,
    bodyFontSize: 15,
    bodySpacing: 5,
    mode: "nearest",
    intersect: 5,
    position: "nearest"
  },
  responsive: true,
};


/* TODO: ESTILOS DE GRAFICAS DE TIPO LINEAS CURVAS */
stylesTipoLineaCurva = {
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: 'rgba(52, 73, 94,0.8)',
    titleFontSize: 20,
    xPadding: 10,
    yPadding: 10,
    bodyFontSize: 15,
    bodySpacing: 5,
    mode: "nearest",
    intersect: 5,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 110,
        padding: 20,
        fontColor: "rgb(47, 174, 190)"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "white"
      }
    }]
  }
};


/*----------------------------------------------------------------------*/
/* NOTE: GRAFICA LINEACURVA (### )*/
var ctx = document.getElementById('graficaLineCurva').getContext('2d');
var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

var data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [{
    label: "Crecimiento",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: 'rgb(250, 228, 35)',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: 'rgb(250, 228, 35)',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: 'rgb(250, 228, 35)',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: [60, 110, 70, 100, 75, 90, 80, 100, 70, 80, 120, 80],
  }]
};

var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: stylesTipoLineaCurva
});

/*----------------------------------------------------------------------*/
/* NOTE: GRAFICA DE COMBIANDA( EFICIENCIA )*/

var ctx = document.getElementById('graficaMixtaEficiencia').getContext('2d');
var graficaMixtaEficiencia = new Chart(ctx, {
  // APARTADO DE LA GRAFICA BARRAS...
  type: 'bar',
  data: {
    datasets: [{
      label: 'Eficiencia',
      data: [20, 40, 60, 40, 20, 0, 70],
      // this dataset is drawn below
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(189, 195, 199, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(106, 176, 76,0.4)',
        'rgba(255, 159, 64, 0.4)'
      ],
      borderWidth: 1,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(189, 195, 199, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(106, 176, 76,1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      order: 1
    }, {
      // APARTADO DE LA GRAFICA LINEAL...
      label: ' % ',
      data: [20, 40, 60, 40, 20, 0, 70],
      /*backgroundColor: 'rgba(19, 15, 64,0.7)',*/
      /* borderColor: 'white',*/
      type: 'line',
      // this dataset is drawn on top
      order: 2
    }],
    labels: ['Machines', 'Workers', 'Admin..', 'Logistic', 'Store']
  },
  options: stylesCombinadas
});


/*----------------------------------------------------------------------*/
/* NOTE: GRAFICA DE DONA( TRABAJADORES )*/

var ctx = document.getElementById('graficaDonaTrabajadores').getContext('2d');
var graficaDonaTrabajadores = new Chart(ctx, {
  type: 'doughnut',
  options: stylesTipoDONA2,
  data: {
    labels: ['Area I   - Trabajadores', 'Area II  - Trabajadores', 'Area III - Trabajadores', 'Area IV - Trabajadores', 'Area V  - Trabajadores', 'Area VI - Trabajadores'],
    datasets: [{
      label: 'Trabajadores',
      data: [35, 40, 15, 27, 15, 30],
      backgroundColor: [
        'rgba(52, 73, 94, 0.8)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(189, 195, 199, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(52, 73, 94, 0.9)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(189, 195, 199, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }]
  },
});

/*----------------------------------------------------------------------*/
/* NOTE: GRAFICA DE DONA( COSTOS )*/

var ctx = document.getElementById('graficaDonaCostos').getContext('2d');
var graficaDonaCostos = new Chart(ctx, {
  type: 'doughnut',
  options: stylesTipoDONA,
  data: {
    labels: ['Comunida 1, Costos', 'Comunida 2, Costos', 'Comunida 3, Costos', 'Comunida 4, Costos', 'Comunida 5, Costos', 'Comunida 6, Costos'],
    datasets: [{
      label: '# of Votes',
      data: [5200, 4300, 5600, 3000, 7000, 2500],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(52, 73, 94, 0.5)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(52, 73, 94, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }]
  },

});
/*----------------------------------------------------------------------*/
/* NOTE: GRAFICA DE BARRAS( PRODUCTIVIDAD )*/

var ctx = document.getElementById('graficaBarraProductividad').getContext('2d');
var graficaBarraProductividad = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'Productividad',
      data: [85, 65, 57, 45, 32, 34, 32, 10, 90],
      // this dataset is drawn below
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(189, 195, 199, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderWidth: 1,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(189, 195, 199, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      order: 1
    }, {
      // APARTADO DE LA GRAFICA LINEAL...
      label: ' % ',
      data: [85, 65, 57, 45, 32, 34, 32, 10, 90],
      /*backgroundColor: 'rgba(19, 15, 64,0.7)',*/
      /* borderColor: 'white',*/
      type: 'line',
      // this dataset is drawn on top
      order: 2
    }],
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
  },
  options: stylesCombinadas2
});

/*---------------------------------------*/
/* NOTE: GRAFICA BARRAS (PRESUPUESTOS )*/

var ctx = document.getElementById('graficaBarraPresupuesto').getContext('2d');
var graficaBarraPresupuesto = new Chart(ctx, {
  type: 'bar',
  options: stylesBarras,
  data: {
    labels: ['AREA 1', 'AREA 2', 'AREA 3', 'AREA 4', 'AREA 5', 'AREA 6'],
    datasets: [{
      label: 'Presupuesto',
      data: [7500, 5500, 3500, 5000, 4100, 6800, 2000],
      backgroundColor: [
        'rgba(52, 73, 94, 0.8)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(189, 195, 199, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(52, 73, 94, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(189, 195, 199, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  responsive: true,

});
/*Graphic Chartjs end*/




