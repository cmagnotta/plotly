
d3.json("plotly/samples.json").then((importedData) => {
  console.log(importedData);
  var belly_data = importedData;

  // Sort the data array using the greekSearchResults value
  belly_data.sort(function(a, b) {
    return parseFloat(b.belly_data) - parseFloat(a.belly_data);
  });

  // Slice the first 10 objects for plotting
  belly_data = belly_data.slice(0, 10);

var trace1 = {
    x: data.map(row => row.sample_values),
    y: data.map(row => row.otu_ids),
    text: data.map(row => row.otu_ids),
    name: "Belly Button",
    type: "bar",
    orientation: "h"
  };

 var bardata = [trace1];
 Plotly.newPlot("plot", bardata, layout);