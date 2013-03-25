var drawCells = require("../canvas.js")
var MeshLayout = require("simplicial-layout")

//Create layout
//var layout = new MeshLayout([[0,1,2],[2,3,6],[1,4,7],[3,4,5]], 2, {radius:100.0})
//var layout = new MeshLayout([[0,1,2,3,4,5]], 2, {radius:100.0})
//var layout = new MeshLayout([[0,1,2], [2,3,4]], 2, {radius:100.0})
var layout = new MeshLayout([[0,1,2], [2,3,4]], 2, {radius:100.0})


for(var i=0; i<layout.positions.length; ++i) {
  layout.positions[i][0] += 250
  layout.positions[i][1] += 250
}

//Create a canvas
var canvas = document.createElement("canvas")
canvas.width = 500
canvas.height = 500
var context = canvas.getContext("2d")
require("raf")(canvas)
  .on('data', function(dt) {
    layout.step(0.1)
    context.fillStyle = "#fff"
    context.fillRect(0, 0, canvas.width, canvas.height)
    drawCells(context, layout.cells, layout.positions)
  })

document.body.appendChild(canvas)
