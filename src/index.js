document.addEventListener("DOMContentLoaded", function () {

let dogImageContainer = document.querySelector('#dog-image-container')
let dogContainer = document.querySelector('#dog-breeds')
let breedDropdown = document.querySelector("#breed-dropdown")

function dogFetch(){
                    fetch("https://dog.ceo/api/breeds/image/random/4")
                    .then(resp => resp.json())
                    .then(json => dogImageAdder(json))
}

function dogImageAdder(json){
    json.message.forEach(url => {
    let dogDig = document.createElement('div')
    dogDig.innerHTML =
    `<img src=${url} alt="doggo">`

    dogImageContainer.append(dogDig)
    }
    )
}

dogFetch()

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogBreedFetch(url){
                    fetch(`${breedUrl}`)
                    .then(resp => resp.json())
                    .then(json => dogBreedAdder(json))
}

function dogBreedAdder(json){
    for (const dog in json.message){
        let dogLi = document.createElement('li')
        dogLi.innerHTML = dog 
        dogContainer.append(dogLi)
    }        
    }
dogBreedFetch(breedUrl)

dogContainer.addEventListener('click', e=>{
    e.target.style.color = "blue"
})

breedDropdown.addEventListener('change', e=>{
    let dogList = dogContainer.querySelectorAll('li')
    dogList.forEach(dog=>{
        if(!dog.innerText.startsWith(e.target.value)){
            dog.style.display = "none"
        }
        else{
            dog.style.display = ""
    }
    })
})


});