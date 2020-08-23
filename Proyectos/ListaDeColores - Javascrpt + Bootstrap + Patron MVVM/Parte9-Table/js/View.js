document.addEventListener("DOMContentLoaded", function(){
    const colorRed = new Color(256, 0, 0, "RED")
    const colorGreen = new Color(0, 256, 0, "GREEN")
    const colorBlue = new Color(0, 0, 256, "BLUE")

    //View
    const viewButtomRed = document.getElementById("buttomRed")
    const viewButtomGreen = document.getElementById("buttomGreen")
    const viewButtomBlue = document.getElementById("buttomBlue")
    const viewDesboard = document.getElementById("desboard")

    //Model
    const model = new Model()

    //ModelViewConsole
    const modelViewConsole = new ModelViewConsole(model)

    const observerConsole = new Observer(modelViewConsole)
    model.subcribe(observerConsole)

    for(var method in ArrayMethod){
        const observerMethod = new ObserverMethod(modelViewConsole, method, ArrayMethod[method])
        model.subcribe(observerMethod)
    }

    //ModelViewDesboard
    const modelViewDesboard = new ModelViewDesboard(model, viewDesboard)

    const observerDesboard = new Observer(modelViewDesboard)
    model.subcribe(observerDesboard)

    //Bind View to ModelView
    viewButtomRed.addEventListener("click", function(){
        modelViewDesboard.add("RED")
    })
    viewButtomGreen.addEventListener("click", function(){
        modelViewDesboard.add("GREEN")
    })
    viewButtomBlue.addEventListener("click", function(){
        modelViewDesboard.add("BLUE")
    })
    viewDesboard.addEventListener("click", function(event){
        const id = event.target.id
        modelViewDesboard.remove(id)
    })

    model.addColor(colorRed)

})