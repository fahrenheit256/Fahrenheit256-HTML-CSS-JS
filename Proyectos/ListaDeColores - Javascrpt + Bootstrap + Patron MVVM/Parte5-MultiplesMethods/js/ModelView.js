
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