$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#FFF",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
    }
})