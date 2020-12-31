const elCanvas = document.getElementById("canvas")
const paintCanvas = elCanvas.getContext("2d")

paintCanvas.beginPath()
paintCanvas.fillStyle = "hsl(400, 100%, 50%)"
paintCanvas.arc(100, 100, 20, 0, Math.PI, false)
paintCanvas.fill()