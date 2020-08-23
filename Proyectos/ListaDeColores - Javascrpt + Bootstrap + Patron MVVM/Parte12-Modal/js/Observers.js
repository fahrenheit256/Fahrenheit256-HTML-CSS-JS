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

const ObserverMethod = function(modelView, methodName, method){

    //Private
    const _modelView = modelView
    const _methodName = methodName
    const _method = method

    //Public
    return({
        update : function(data ,event){
            _modelView.reloadMethod(data, _methodName, _method)
        }
    })
}