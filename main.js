const { default: axios } = require("axios")

let getResidents = document.querySelector("button")

function buttonStrike(){
    console.log('button clicked')
}

getResidents.addEventListener('click', buttonStrike)



axios.get("https://swapi.dev/api/planets/2/")
.then((response) => console.log(response.data))

    for (let i = 0; i < getResidents.length; i++){
   

}
