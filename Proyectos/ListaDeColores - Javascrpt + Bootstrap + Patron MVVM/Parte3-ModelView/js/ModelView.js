
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
            console.log(print)
        }
    })

}