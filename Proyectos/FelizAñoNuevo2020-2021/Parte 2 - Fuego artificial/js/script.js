const elCanvas = document.getElementById("canvas")
const paintCanvas = elCanvas.getContext("2d")

/* paintCanvas.beginPath()
paintCanvas.fillStyle = "hsl(400, 100%, 50%)"
paintCanvas.arc(100, 100, 20, 0, Math.PI, false)
paintCanvas.fill() */

function Random(min, max){
    return Math.random() * (max - min - 1) + min | 0
}

function Firework(startPoint, endPoint, color, context){
    //Private
    const data = {
        endPoint,
        color,
        context,
        points : [startPoint]
    }

    const _DrawIOnePoint = function(x, y){
        paintCanvas.beginPath()
        paintCanvas.fillStyle = `hsl(${data.color}, 100%, 50%)`
        paintCanvas.arc(x, y, 2, 0, Math.PI, false)
        paintCanvas.fill()
    }

    const _DrawMultiPoint = function(){

        
        for(point of data.points){
            _DrawIOnePoint(point.x, point.y)
        }
    }

    const _CreateNextPoint = function(){
        const lastPointPosition = data.points.length - 1
        const lastPoint = data.points[lastPointPosition]

        const xDiff = data.endPoint.x - lastPoint.x
        const yDiff = data.endPoint.y - lastPoint.y

        const nextPoint = {
            x : lastPoint.x + (xDiff / 20),
            y : lastPoint.y + (yDiff / 20)
        }

        data.points.push(nextPoint)
    }

    const _DeleteOldPoint = function(){
        if(data.points.length > 5) data.points.shift()
    }

    //Public
    return{
        Shooting : function(){
            _DrawMultiPoint()
            _CreateNextPoint()
            _DeleteOldPoint()
        }
    }
}


const width = window.innerWidth
const height = window.innerHeight

elCanvas.width = width
elCanvas.height = height


const pointA = {x : Random(width * .2, width * .8), y : height}
const pointB = {x :  Random(width * .2, width * .8) , y : Random( height * .5, height * .1)}

const myFirstFirework = new Firework(
    pointA,
    pointB,
    400,
    paintCanvas
)

for(var i = 0; i < 50; i++){
    paintCanvas.globalCompositeOperation = "hard-light"
    paintCanvas.fillStyle = 'rgba(20,20,20,0.15)'
    paintCanvas.fillRect(0,0, width, height)
    paintCanvas.globalCompositeOperation = "lighter"
    myFirstFirework.Shooting()
}