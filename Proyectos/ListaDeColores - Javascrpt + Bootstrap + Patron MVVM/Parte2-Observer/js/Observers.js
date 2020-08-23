const Observer = function(){

    //Public
    return({
        update : function(event){
            console.log(`Ocurrio un cambio en el modelo, el metodo fue : ${event}`)
        }
    })
}