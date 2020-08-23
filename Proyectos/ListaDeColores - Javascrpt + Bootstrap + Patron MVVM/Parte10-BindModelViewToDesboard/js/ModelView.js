
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

const ModelViewDesboard = function(model, view){

    //Private
    const _model = model
    const _view = view

    //Public
    return({
        reload : function(data){
            _view.innerHTML = ""
            data.forEach((color, index, array) => {
                const newElemet = document.createElement("span")
                newElemet.setAttribute("id", index)
                const textColorName = document.createTextNode(color.getName() + ",")
                newElemet.appendChild(textColorName)
                _view.appendChild(newElemet)
            })
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
            if(Array.isArray(result)){
                _view.innerHTML = ""
                result.forEach((color, index, array) => {
                    const newElemet = document.createElement("span")
                    newElemet.setAttribute("id", index)
                    const textColorName = document.createTextNode(color.getName() + ",")
                    newElemet.appendChild(textColorName)
                    _view.appendChild(newElemet)
                })
            }else{
                if(typeof(result) === "object"){
                    _view.innerHTML = result.getName()
                }else{
                    _view.innerHTML = result
                }
            }
        }
    })
}