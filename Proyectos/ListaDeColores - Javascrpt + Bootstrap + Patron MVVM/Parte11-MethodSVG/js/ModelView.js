
function ConvertArrayToString(array){
    const arrayString = []
    array.forEach(color => {
        arrayString.push(color.getName())
    });
    return  `[${arrayString.join(",")}]`
}

const ModelViewConsole = function(model){

    //Private
    const _model = model

    //Public
    return({
        reload : function(data){
            const print = ConvertArrayToString(data)
            console.log(`Lista ${print}`)
        },
        reloadMethod : function(data, nameMethod, method){
            const result = method(data)
            if(Array.isArray(result)){
                const print = ConvertArrayToString(result)
                console.log(`${nameMethod} : ${print}`)
            }else{
                if(typeof(result) === "object"){
                    console.log(`${nameMethod} : ${result.getName()}`)
                }else{
                    console.log(`${nameMethod} : ${result}`)
                }
            }
            
        }, 
    })

}


const FactorySvgCircle = function(){

    //Private
    const _circle = function(color){
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        circle.classList.add("svg_circle")
        circle.style.fill = color
        return circle
    }  
    
    //Public
    return({
        svg : function(elementColor){
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            svg.classList.add("svg")
            const circle = _circle(elementColor.getColor())
            svg.appendChild(circle)
            return svg
        },
        text : function(text){
            const span = document.createElement("span")
            const nodeText = document.createTextNode(text)
            span.appendChild(nodeText)
            return span
        },
        arraySvg : function(colorsList){
            const container = document.createElement("span")
            colorsList.forEach((color, index, array) => {
                const newSvg = this.svg(color)
                container.appendChild(newSvg)
                if(index !== array.length -1 ){
                    const comma = this.text(",")
                    container.appendChild(comma)
                }
            })
            return container
        }
    })
}

const ModelViewDesboard = function(model, view){

    //Private
    const _model = model
    const _view = view

    //Public
    return({
        reload : function(data){
            const factorySvg  = new FactorySvgCircle()
            _view.innerHTML = ""
            const result = factorySvg.arraySvg(data)
            _view.appendChild(result) 
        },
        add : function(colorName){
            const newColor = FactoryColor[colorName]()
            _model.addColor(newColor)
        },
        remove : function(index){
            _model.removeColor(index)
        }
    })

}

const ModelViewMethod = function(model, view){

    //Private
    const _model = model
    const _view = view

    //Public
    return({
        reloadMethod : function(data, methodName, method){
            const result = method(data)
            const factorySvg  = new FactorySvgCircle()
            _view.innerHTML = ""
            if(Array.isArray(result)){
                
                
                const bracketOpen = factorySvg.text("[")
                _view.appendChild(bracketOpen) 

                const result = factorySvg.arraySvg(data)
                _view.appendChild(result) 
                
                const bracketClose = factorySvg.text("]")
                _view.appendChild(bracketClose) 

            }else{
                if(typeof(result) === "object"){
                    const svg = factorySvg.svg(result)
                    _view.appendChild(svg) 
                }else{
                    _view.innerHTML = result
                }
            }
        }
    })
}