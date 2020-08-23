document.addEventListener("DOMContentLoaded", function(){
    const colorRed = new Color(256, 0, 0, "RED")
    const colorGreen = new Color(0, 256, 0, "GREEN")
    const colorBlue = new Color(0, 0, 256, "BLUE")

    //View
    const viewButtomRed = document.getElementById("buttomRed")
    const viewButtomGreen = document.getElementById("buttomGreen")
    const viewButtomBlue = document.getElementById("buttomBlue")
    const viewDesboard = document.getElementById("desboard")
    const viewTable = document.getElementById("table")
    const viewRowExample = document.getElementById("rowExample")

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

    for(var method in ArrayMethod){
        const copyRow = viewRowExample.cloneNode(true)
        copyRow.classList.remove("hidden")
        copyRow.setAttribute("id", "")
        const children = copyRow.childNodes

        children[1].textContent = method
        children[1].setAttribute("data-target", "#exampleModal")
        children[1].setAttribute("data-toggle", "modal")
        children[1].setAttribute("data-method", method)
        children[1].addEventListener("click", function(event){
            const method = event.target.getAttribute("data-method")
            document.getElementById("code").textContent = ArrayMethod[method]
        })

        children[3].setAttribute("id", method)

        viewTable.appendChild(copyRow)

        
        //ViewModel
        const viewRowMetho = document.getElementById(method)
        const viewModelMethod = new ModelViewMethod(model, viewRowMetho)
        const observerMethodView = new ObserverMethod(viewModelMethod, method, ArrayMethod[method])
        model.subcribe(observerMethodView)
    }

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