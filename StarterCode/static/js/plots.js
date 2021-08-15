// Use the D3 library to read in samples.json
const url = "../samples.json";
const dataread = d3.json(url);
console.log(dataread);

//fetch json data
d3.json(url).then(function(name) {
    
// inital chart     
//function init () {   
    initial_value = name.samples.map((id) => {return id;})

    function init_id(init_id) {return init_id.id === "940"; }

    bar_init_value = initial_value.filter(init_id)

        console.log(initial_value);
        console.log(bar_init_value);
        
    
// get values for initial chart
    let bar_values = bar_init_value.map((values) => {return values.sample_values.slice(0, 10);});
    let bar_labels = bar_init_value.map((labels) => {return labels.otu_ids.slice(0, 10);});
    let hovertext = bar_init_value.map((labels) => {return labels.otu_labels.slice(0, 10);});

    let bar_values_cl = bar_values[0].reverse();
    let bar_label_cl = bar_labels[0].map((bar_label_cl) =>{return `OTU_${bar_label_cl}` }).reverse();
    let hovertext_cl = hovertext[0].reverse();
    
        console.log('Bar_values', bar_values_cl);
        console.log("Bar_labels", bar_label_cl);
        console.log("Hover_text",hovertext_cl);

//plot initial chart   
    let trace1 = {
        x: bar_values_cl,
        y: bar_label_cl,
        type: 'bar',
        orientation: 'h'
      };
    
    let bardata = [trace1];
    
    title = "Top 10 OTUs"
    let layout = {
        title: title
      };
    
    Plotly.newPlot("bar", bardata, layout);
    
//

    // let value = name.samples.map((id) => {return id.id;})
    // console.log(value);  

    // function init ()

    // //  // Use D3 to select the dropdown menu
    // var dropdownMenu = d3.select("#selDataset");
    // //  // Assign the value of the dropdown menu option to a variable
    // var dataset = dropdownMenu.property("value");




//init()


});



// initiate 
// function init() {

// //otu_ids_init = []

//     d3.json(url).then(function(name) {
//         let jsondata = name.samples      
//         let id_init = jsondata.map((id_init) => {return id_init.id  })
//         if (id_init === 941) {
//             console.log(id_init);
//       }
        
         
//        //console.log(id_init);  
//      });
     



  
  //  Plotly.newPlot("plot", data);
//   }


// init();

// let id_array = jsondata.map((id) => { 
//     return id.id;}
//     );
// console.log("sample_values", id_array)



// let bar_label = jsondata.map((barlabel) => { 
//     return barlabel.otu_ids;}
//     );
// console.log("labels", bar_label)


// let title = `10 OTUs found in that individual`

// Assign `x` and `y` values for the Plotly trace object
// let trace1 = {
//   x: samplevalue,
//   y: bar_label,
//   type: 'bar'
// };

// // Leave the code below unchanged
// let bardata = [trace1];

// let layout = {
//   title: title
// };

// Plotly.newPlot("bar", bardata, layout);