d3.json("samples.json").then((data) => {
	var trace1 = {
    x: samples.sample_values,
    y: samples.otu_ids,
    type: 'bar'
     }
};

//Use otu_ids as the labels for the bar chart.


//Use otu_labels as the hovertext for the chart.


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

//bubble chart
var trace1 = {
  x: samples.otu_ids,
  y: samples.sample_values,
  ode: 'markers',
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    opacity: [1, 0.8, 0.6, 0.4],
    size: [40, 60, 80, 100],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
  }
};

var data1 = [trace1];

var layout1 = {
  title: 'Belly Button Lint Bubble Chart',
  showlegend: true,
  height: 600,
  width: 600,
};


//Use sample_values for the marker size.


//Use otu_ids for the marker colors.


//Use otu_labels for the text values.

//Display the sample metadata, i.e., an individual's demographic information.
Plotly.newPlot('id="bubble"', data1, layout1);

//Display each key-value pair from the metadata JSON object somewhere on the page.
var sample-metadata = samples.metadata;

//check to make sure this is correct.

//Update all of the plots any time that a new sample is selected.




