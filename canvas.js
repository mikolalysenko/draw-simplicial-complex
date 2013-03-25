"use strict"

var DEFAULT_COLORS = [
  "rgba(255,0,0,0.5)",
  "rgba(0,255,0,0.5)",
  "rgba(0,0,255,0.5)",
  "rgba(255,255,0,0.5)",
  "rgba(255,0,255,0.5)",
  "rgba(0,255,255,0.5)"
];

function drawComplex(context, cells, positions, options) {
  options = options || {}
  var colors = options.colors || DEFAULT_COLORS
  var stroke = "rgba(0,0,0,0)"
  for(var i=0; i<cells.length; ++i) {
    var c = cells[i]
    context.fillStyle = colors[i%colors.length]
    context.strokeStyle = "rgba(0,0,0,1)"
    context.beginPath()
    var p = positions[c[0]]
    context.moveTo(p[0], p[1])
    for(var j=1; j<c.length; ++j) {
      p = positions[c[j]]
      context.lineTo(p[0], p[1])
    }
    context.closePath()
    if(c.length === 2) {
      context.stroke()
    } else if(c.length > 2) {
      context.fill()
    }
  }

}

module.exports = drawComplex