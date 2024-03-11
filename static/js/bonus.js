// Gauge plot
function gaugePlot(sampleInfo) {
    d3.json(data_url).then((data) => {
        let metadata = data.metadata;
        // Get the selected option element
        let sampleValue = metadata.filter(sampleName => sampleName.id == sampleInfo);
        let subject = sampleValue[0].wfreq;
        console.log(subject);

        var myConfig = {
            title: { text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week',font: { size: 24 }},
            type: "gauge",
            globals: {
                fontSize: 25
            },
            plotarea: {
                marginTop: 120
            },
            plot: {
                size: '100%',
                valueBox: {
                    placement: 'center',
                    text: '%v', //default
                    fontSize: 35,
                    rules: [{
                            rule: '%v >= 9',
                            text: '%v<br>EXCELLENT'
                        },
                        {
                            rule: '%v < 9 && %v > 6',
                            text: '%v<br>Good'
                        },
                        {
                            rule: '%v < 7 && %v > 3',
                            text: '%v<br>Fair'
                        },
                        {
                            rule: '%v <  4',
                            text: '%v<br>Bad'
                        }
                    ]
                }
            },
            tooltip: {
                borderRadius: 5
            },
            scaleR: {
                aperture: 180,
                minValue: 0,
                maxValue: 9,
                step: 1,
                center: {
                    visible: false
                },
                tick: {
                    visible: false
                },
                item: {
                    offsetR: 0,
                    rules: [{
                        rule: '%i == 9',
                        offsetX: 15
                    }]
                },
                labels: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'],
                ring: {
                    size: 50,
                    rules: [{
                            rule: '%v <= 1',
                            backgroundColor: 'DarkRed'
                        },
                        {
                            rule: '%v > 0 && %v < 2',
                            backgroundColor: 'FireBrick'
                        },
                        {
                            rule: '%v > 1 && %v < 3',
                            backgroundColor: 'IndianRed'
                        },
                        {
                            rule: '%v > 2 && %v < 4',
                            backgroundColor: 'LightCoral'
                        },
                        {
                            rule: '%v >3 && %v < 5',
                            backgroundColor: 'MistyRose'
                        },
                        {
                            rule: '%v > 4 && %v < 6',
                            backgroundColor: 'PaleTurquoise'
                        },
                        {
                            rule: '%v > 5 && %v < 7',
                            backgroundColor: 'PowderBlue'
                        },
                        {
                            rule: '%v > 6 && %v < 8',
                            backgroundColor: 'SkyBlue'
                        },
                        {
                            rule: '%v > 7 && %v < 9',
                            backgroundColor: 'SteelBlue'
                        }
                    ]
                }
            },

            series: [{
                values: [subject], // starting value
                backgroundColor: 'black',
                indicator: [10, 10, 10, 10, 0.75],
                animation: {
                    effect: 2,
                    method: 1,
                    sequence: 4,
                    speed: 900
                },
            }]
        };

        zingchart.render({
            id: 'gauge', // ID of the chart container
            data: myConfig,
            height: 500,
            width: '100%'
        });
    });
};
