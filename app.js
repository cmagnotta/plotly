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
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: [40, 60, 80, 100]
    }
  } 
  var layoutBub = {
    title: 'Bacteria Frequency',
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
      title: "Most Common Bacteria",
    }

    var dataBar = [traceBar]
    var dataBub = [traceBub];
    Plotly.newPlot("bubble", dataBub, layoutBub);
    Plotly.newPlot("bar", dataBar, layoutBar);

    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: metadata.wfreq,
        title: { text: "Wash Frequency" },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
          axis: { range: [null, 10] },
          steps: [
            { range: [0,1], color: "#ff0000" },
            { range: [1,2], color: "#ff9999" },
            { range: [2,3], color: "#ffcccc" },
            { range: [3,4], color: "#ffe6e6" },
            { range: [4,5], color: "#FFF0F5" },
            { range: [5,6], color: "#F0FFFF" },
            { range: [6,7], color: "#ADD8E6" },
            { range: [7,8], color: "#87CEEB" },
            { range: [8,9], color: "#1E90FF" },
            { range: [9,10], color: "#0000FF" }
          ],
          
          }
        }
      
    ];
    
    var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);

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