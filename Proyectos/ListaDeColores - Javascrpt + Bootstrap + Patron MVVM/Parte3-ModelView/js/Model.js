const Color = function(r, g, b, name){

    //Private
    const _r = r
    const _g = g
    const _b = b
    const _name = name


    //Publica
    return({
        getR : function(){return _r},
        getG : function(){return _g},
        getB : function(){return _b},
        getName : function(){return _name},
        getColor : function(){return `rgb(${_r}, ${_g}, ${_b})`}
    })
}

const Model = function(){

    //Private
    const _colorsList = []
    const _observers = []

    const _notify = function(event){
        _observers.forEach((observer) => {
            observer.update(_colorsList, event)
        })
    }

    //Public
    return({
        getList : function(){return _colorsList},
        addColor : function(newColor){
            _colorsList.push(newColor)
            _notify("ADD")
        },
        removeColor : function(index){
            //_colorList.slice( Desde donde?, Cuantos?)
            _colorsList.splice(index, 1)
            _notify("REMOVE")
        },
        subcribe : function(observer){_observers.push(observer)},
        unsubcribe :function(observer){_observers.filter((obs) => {obs != observer})}
    })

}