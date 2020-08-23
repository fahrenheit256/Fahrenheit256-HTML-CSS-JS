const ArrayMethod = {
    concat : function(array, arrayToAdd = [FactoryColor.BLUE()]){
        const result = array.concat(arrayToAdd)
        return result
    },
    filter : function(array, colorToFilter = FactoryColor.RED()){
        const result = array.filter((color) => {
            return color.getName() !== colorToFilter.getName()
        })
        return result
    },
    find : function(array, colorToFind = FactoryColor.GREEN()){
        const result = array.find((color) => {
            return color.getName() === colorToFind.getName()
        })
        return result
    },
}