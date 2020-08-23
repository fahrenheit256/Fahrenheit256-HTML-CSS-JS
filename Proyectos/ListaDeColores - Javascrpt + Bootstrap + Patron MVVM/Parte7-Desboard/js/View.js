document.addEventListener("DOMContentLoaded", function(){
    const colorRed = new Color(256, 0, 0, "RED")
    const colorGreen = new Color(0, 256, 0, "GREEN")
    const colorBlue = new Color(0, 0, 256, "BLUE")

    const model = new Model()

    const modelViewConsole = new ModelViewConsole(model)

    const observerConsole = new Observer(modelViewConsole)
    model.subcribe(observerConsole)

    for(var method in ArrayMethod){
        const observerMethod = new ObserverMethod(modelViewConsole, method, ArrayMethod[method])
        model.subcribe(observerMethod)
    }


    model.addColor(colorRed)

})