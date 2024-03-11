
// loading the data
const  data_url ="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function dataPlot(dataplot) {
    d3.json(data_url).then(function(infoID) {
        let sampleInfo = infoID.samples;
        // Get the selected option element
        for (let i = 0; i < sampleInfo.length; i++) {
            if (dataplot == sampleInfo[i].id) {
                let sample_init = sampleInfo[i];
                console.log(sample_init);
                // Get the selected option element
                let otu_ids = sample_init.otu_ids;
                let sample_values = sample_init.sample_values;
                let otu_labels = sample_init.otu_labels;
                console.log(sample_values);
                // Bar chart
                let trace1 = {
                    x: sample_values.slice(0, 10).reverse(),
                    y: otu_ids.map(otu => `OTU ${otu}`).slice(0, 10).reverse(),
                    text: otu_labels.slice(0, 10).reverse(),
                    type: "bar",
                    fillColor: "blue",
                    strokeColor: "black",
                    orientation: "h"
                };
                
                // Data array
                let graph_bar = [trace1];
                // Apply a title to the layout
                let layout = {
                    height: 600,
                    width: 400,
                    title: {text: "Top 10 Bacteria Cultures",
                            font: {
                                size: 25, // Adjust the size as needed
                                color: 'black', // Specify the font color
                                family: 'Arial, sans-serif', // Specify the font family
                                weight: 'bold' // Make the font bold
                            },
                            },
                    xaxis: { title: 'OTU Values' }
                };
                // Render the plot to the div tag with id "plot"
                Plotly.newPlot("bar", graph_bar, layout);

                // Bubble chart
                var trace4 = {
                    x: otu_ids,
                    y: sample_values,
                    text: otu_labels,
                    mode: 'markers',
                    marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: 'RdBu'          
                    }
                };
                // Data array
                let bubble_data = [trace4];
                // Apply a title to the layout
                var layout2 = {
                    title: {
                        text: 'Bacteria culture sample', // Title text
                        font: {
                            size: 40, // Adjust the size as needed
                            color: 'black', // Specify the font color
                            family: 'Arial, sans-serif', // Specify the font family
                            weight: 'bold' // Make the font bold
                        }
                    },
                    showlegend: false,
                    height: 500,
                    width: 1500,
                    xaxis: { title: 'OTU ID' },
                    // margin: {
                    //     l: 80,
                    //     b: 100,
                    //     t: 40,
                    // }
                };
                // Render the plot to the div tag with id "plot"
                Plotly.newPlot('bubble', bubble_data, layout2);
            };
        };
    });    
};


function tableMetadata(sampleInfo) {
    d3.json(data_url).then((data) => {
        let metadata = data.metadata;
        // Get the selected option element
        let sampleValue = metadata.filter(sampleName => 
            sampleName.id == sampleInfo);
        let subject = sampleValue[0];
        console.log(subject);
        let panel = d3.select("#sample-metadata");
        // Clear previous dashboard content
        panel.html("");
        Object.entries(subject).forEach(([key, value]) => {
          panel.append("h6").text(`${key}: ${value}`);
        });
});
};

function init() {
    // Get the dropdown menu element
    let selector = d3.select("#selDataset");
    
    // Function to populate the dropdown menu
    d3.json(data_url).then((data) => {
      var sampleID = data.names;
      sampleID.forEach((sample) => {
        selector.append("option").text(sample).property("value", sample);
      });
    
      // Use the first sample from the list to build the initial plots
      let defaultSample = sampleID[0];
      dataPlot(defaultSample);
      tableMetadata(defaultSample);
      gaugePlot(defaultSample);
    });
    }
    // Function to handle onchange event of the dropdown menu
    function optionChanged(newSample) {
        console.log(newSample);
    // Fetch new data each time a new sample is selected
        dataPlot(newSample);
        tableMetadata(newSample);
        gaugePlot(newSample);
    }
    
    
                   
    
    // Initialize the dashboard
    init();
