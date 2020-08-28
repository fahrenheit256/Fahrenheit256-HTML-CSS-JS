document.addEventListener("DOMContentLoaded", function(){

    let countrysListElement = document.getElementsByTagName("article")
    const countryList = [...countrysListElement]

    const tcc = new ThemeCountryChange(countryList)

    countryList.forEach((country) => {
        document.getElementById(country.id).addEventListener("click", function(){
            tcc.ChangeThemeAllCountry(this.id)
        })
    })

    document.getElementById("reload").addEventListener("click", function(){
        tcc.RestoreThemeByFlag()
    })
})

function ThemeCountryChange(countrysList){

    //Private
    let _lasCountryTheme = ""
    const _countryList = countrysList

    const _setLastCountryTheme = function(newLastCountryColor){
        _lasCountryTheme = newLastCountryColor
    }

    const _clearLastCountryTheme = function(){
        _lasCountryTheme = ""
    }

    const _removeTheme = function(countryElement, countryTheme){
        countryElement.classList.remove(`theme_${countryTheme}`)
    }

    const _addTheme = function(countryElement, countryTheme){
        countryElement.classList.add(`theme_${countryTheme}`)
    }

    //Public
    return({
        ChangeThemeAllCountry : function(countyThemeSelected){
            _countryList.forEach((country) => {
                const countryElement = document.getElementById(country.id)
                if(_lasCountryTheme !== ""){
                    //Si las banderas tiene un theme distinto al propio necesito removerlo
                    _removeTheme(countryElement, _lasCountryTheme)
                }else{
                    //Si las banderas tiene su propio theme, necesito removerlo para agregar el nuevo
                    _removeTheme(countryElement, country.id)
                }
                _addTheme(countryElement, countyThemeSelected)
            })
            _setLastCountryTheme(countyThemeSelected)
        },
        RestoreThemeByFlag : function(){
            if(_lasCountryTheme !== ""){
                _countryList.forEach((country) => {
                    const countryElement = document.getElementById(country.id)
                    _removeTheme(countryElement, _lasCountryTheme)
                    _addTheme(countryElement, country.id)
                })
                _clearLastCountryTheme()
            }
        }
    })
}