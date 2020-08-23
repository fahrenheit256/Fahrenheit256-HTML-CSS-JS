const ArrayMethod = {
    concat : function(array, arrayToAdd=[new Color(0, 0, 256, "BLUE")]){
        const result = array.concat(arrayToAdd)
        return result
    },
    filter : function(array, colorToFilter= new Color(256, 0, 0, "RED")){
        const result = array.filter((color) => {
            return color.getName() !== colorToFilter.getName()
        })
        return result
    },
    find : function(array, colorToFind= new Color(0, 256, 0, "GREEN")){
        const result = array.find((color) => {
            return color.getName() === colorToFind.getName()
        })
        return result
    },
}