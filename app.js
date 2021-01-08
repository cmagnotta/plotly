//connect the data to the drop down.

var names = Object.values("names");
var metadata = Object.values("metadata");
var id = Object.values(metadata.id);

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");
  var belly_data = [];

  if (dataset == belly_names) {
    dataset = belly_names
    updatePlotly(data);
  };

//this is the html for the drop down
//<select id="selDataset" onchange="optionChanged(this.value)"></select>


//import data and put it in a trace to plot it.

belly_data.sort(function(a, b) {
    return parseFloat(b.belly_data) - parseFloat(a.belly_data);
  });

  // Slice the first 10 objects for plotting
  belly_data = belly_data.slice(0, 10);

d3.json("samples.json").then((belly_data) => {
  //  Create the Traces
  var trace1 = {
    x: belly_data.map(row => row.sample_values),
    y: belly_data.map(row => row.otu_ids),
    text: belly_data.map(row => row.otu_ids),
    name: "Belly Button",
    type: "bar",
    orientation: "h"
  }

  var data1 = [trace1]

  var trace2 = {
    x: data.map(row => row.otu_ids),
    y: data.map(row => row.sample_values),
    text: data.map(row => row.otu_ids),
    name: "Belly Button",
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }

  var data2 = [trace2];

  var layout2 = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };

Plotly.newPlot('bar', data1, layout1);
Plotly.newPlot('bubble', data2, layout2);
