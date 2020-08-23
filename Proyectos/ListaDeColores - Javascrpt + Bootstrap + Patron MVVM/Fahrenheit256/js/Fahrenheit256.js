
const header = {
    state : false,
    IsOpen: function(){return this.state},
    ChangeState : function(){this.state = !this.state}
}

document.addEventListener("keydown", function(event){
    if(header.IsOpen()){
        console.log("cerrar")
        document.getElementById("dialog-menu").classList.remove("dialog--show")
    }else{
        console.log("abrir")
        document.getElementById("dialog-menu").classList.add("dialog--show")
    }
    header.ChangeState() 
})