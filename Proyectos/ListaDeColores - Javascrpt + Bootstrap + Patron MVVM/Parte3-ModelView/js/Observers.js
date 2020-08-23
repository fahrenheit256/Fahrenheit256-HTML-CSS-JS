const Observer = function(modelView){

    //Private
    const _modelView = modelView

    //Public
    return({
        update : function(data ,event){
            _modelView.reload(data)
        }
    })
}