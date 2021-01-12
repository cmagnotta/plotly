d3.json("samples.json").then((belly_data) => {
  var names = belly_data.names;
  console.log(names);

 var dropdownMenu = d3.select("#selDataset");

 belly_data.names.forEach(element => {
   dropdownMenu.append("option").text(element).property("value", element)
 });

function getData() {
  var dataset = dropdownMenu.property("value");
  console.log(belly_data.samples)
  results = belly_data.samples.filter(sample => sample.id == dataset);
  console.log(results);
  var otu_ids = results[0].otu_ids;
  var otu_labels = results[0].otu_labels;
  console.log(otu_ids);
  otu_ids.slice(0, 10);
  var sample = results[0].sample_values;

  var metadata = belly_data.metadata.find(sample => sample.id == dataset);
  console.log(metadata);

  var traceBub = {
    x: otu_ids,
    y: sample,
    text: sample,
    name: "Belly Button Bubble Chart",
    mode: 'markers',
    marker: {
    size: [40, 60, 80, 100]
    }
  } 
  var layoutBub = {
    title: 'Marker Size',
      showlegend: true,
      height: 600,
      width: 600
    };
  var traceBar = {
    x: sample.slice(0,10),
    y: otu_ids.slice(0, 10).map(otu_id => "OTU " + otu_id),
    text: otu_labels.slice(0, 10),
      name: "Belly Button",
      type: "bar",
      orientation: "h"
    }

    var layoutBar = {
      title: "This is my bar chart",
    }

    var dataBar = [traceBar]
    var dataBub = [traceBub];
    Plotly.newPlot("bubble", dataBub, layoutBub);
    Plotly.newPlot("bar", dataBar, layoutBar);

    d3.select("#metadata").html("")
    d3.select("#metadata").append("p").text("ID: " + metadata.id);
    d3.select("#metadata").append("p").text("Ethnicity: " + metadata.ethnicity);
    d3.select("#metadata").append("p").text("Gender: " + metadata.gender);
    d3.select("#metadata").append("p").text("Age: " + metadata.age);
    d3.select("#metadata").append("p").text("Locaton: " + metadata.location);
    d3.select("#metadata").append("p").text("BBtype: " + metadata.bbtype);
    d3.select("#metadata").append("p").text("Wash Frequency: " + metadata.wfreq);
    
   };
  
  
d3.selectAll("#selDataset").on("change", getData);


});