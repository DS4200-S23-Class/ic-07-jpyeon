//js file

// Typically, we use constants for frame dimensions and the frame
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = 
d3.select("#vis1")
  .append("svg") 
    .attr("height", FRAME_HEIGHT)  
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame");


const data1 = [100, 200, 300];

// Add a new frame for this new visualization
const FRAME2 = d3.select("#vis1") 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 

// Add point for each datum in data1                 
FRAME2.selectAll("points")                 
      .data(data1)  
      .enter()   
      .append("circle")  
        .attr("cx", (d) => { return d; })                                 
        .attr("cy", 0) 
        .attr("r", 20)
        .attr("class", "point"); 

// The above code does not take into account margins! Let's 
// redo that chunk, accounting for margins

// Now, rebuild 
FRAME2.selectAll("points")  
    .data(data1)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (d + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 


