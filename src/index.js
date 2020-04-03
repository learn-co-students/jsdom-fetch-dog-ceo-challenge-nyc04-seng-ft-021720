const imageContainer = document.querySelector("#dog-image-container")
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => renderImg(json))

function renderImg(json){
  json.message.forEach(image => {
    const img = document.createElement("img")
    img.src = image
    imageContainer.appendChild(img)
  })
}

const breedList = document.querySelector("#dog-breeds")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    // debugger
    const jsonBreeds = Object.keys(json.message)
    jsonBreeds.forEach(breed => {
      const li = document.createElement("li")
      li.innerHTML = breed
      breedList.appendChild(li)
    })
  })

breedList.addEventListener("click", function(e){
  e.target.style.color = "red"
  console.log(e.target)
})

const breedDropdown = document.querySelector("#breed-dropdown")
breedDropdown.addEventListener("change", function(e){
  // fetch breed list from api and filter that
  // create new li's and do an innerHTML replace
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      let liString = ""
      const jsonBreeds = Object.keys(json.message)
      jsonBreeds.forEach(breed => {
        if (breed[0] === e.target.value){
          liString += `<li>${breed}</li>`
        }
      })
      breedList.innerHTML = liString
    })
    
  // const lis = Array.from(breedList.children)
  // return lis.filter(function(breed){
  //   return breed.textContent[0] === e.target.value})
})
