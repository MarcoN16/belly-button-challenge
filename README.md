# Belly Button Biodiversity Dashboard
In this project, I created an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

<img width="448" alt="homepage" src="https://github.com/MarcoN16/belly-button-challenge/assets/150491559/b660f420-f2af-4eed-bed3-df7f56df141f">


### Features
1.	Horizontal Bar Chart with Dropdown Menu
- Utilizes the D3 library to read in data from the samples.json file.
- Displays the top 10 OTUs found in an individual subject.
-	Uses sample_values as the values for the bar chart.
-	Uses otu_ids as the labels for the bar chart.
-	Utilizes otu_labels as hover text for the chart.

  <img width="142" alt="horizontal_bar" src="https://github.com/MarcoN16/belly-button-challenge/assets/150491559/44cf928b-2e92-4575-b921-fb001a0700e9">

  
2.	Bubble Chart
- 	Displays each bacterial sample.
-	Uses otu_ids for the x values.
-	Utilizes sample_values for the y values and marker size.
-	Uses otu_ids for the marker colors.
-	Utilizes otu_labels for the text values.

  <img width="448" alt="hover_text" src="https://github.com/MarcoN16/belly-button-challenge/assets/150491559/6c4a6fb4-7aa6-42b5-8c8b-0ace5fe66534">

  
3.	Metadata Display
-	Displays each key-value pair from the metadata JSON object on the page.

<img width="80" alt="metadata" src="https://github.com/MarcoN16/belly-button-challenge/assets/150491559/48c196fb-64dc-4e00-996b-39602e9cf19b">


5.	Gauge Chart
-	Plots the weekly washing frequency of the individual subject.
-	Modified the gauge code to account for values ranging from 0 through 9.
- the chart will update whenever a new sample is selected.

<img width="193" alt="gauge_chart" src="https://github.com/MarcoN16/belly-button-challenge/assets/150491559/4a90a5d3-99ac-476a-a6e8-c3f90f42c47c">


## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

