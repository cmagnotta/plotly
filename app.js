d3.json("samples.json").then((data) => {
	var trace1 = {
    x: samples.sample_values,
    y: samples.otu_ids,
    type: 'bar'
     }
};

var data = [trace];

var layout = {
  title: 'Belly button lint',
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: true,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};
Plotly.newPlot('id="bar"', data, layout);



