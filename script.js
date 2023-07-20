let images = [
    {
        owner: "John",
        imageUrl: "https://images.pexels.com/photos/16641083/pexels-photo-16641083/free-photo-of-iguana-banana.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        price: 700
    },
    {
        owner: "Daisy",
        imageUrl: "https://images.pexels.com/photos/16855802/pexels-photo-16855802/free-photo-of-ready-to-eat-cake-on-a-cakestand.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        price: 900
    },
    {
        owner: "Joel",
        imageUrl: "https://images.pexels.com/photos/16882976/pexels-photo-16882976/free-photo-of-abuela.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        price: 1100
    },
    {
        owner: "Mercy",
        imageUrl: "https://images.pexels.com/photos/14260624/pexels-photo-14260624.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        price: 1300
    },
    {
        owner: "Medrine",
        imageUrl: "https://images.pexels.com/photos/4354643/pexels-photo-4354643.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        price: 1700
    }
]

for(image of images){
    let newDiv = document.createElement("div");
    newDiv.className = "card"
    newDiv.innerHTML = `
        <img src = ${image.imageUrl} alt = "Works of art">
        <h4>${image.owner}</h4>
        <p> Price: Ksh ${image.price}</p>
    `
    const container = document.getElementById('imageContainer')
    container.appendChild(newDiv)
}


// Using querySelector
let form = document.querySelector('#submitForm')
let newOwner = document.querySelector("#owner")
let newImage = document.querySelector("#imageUrl")
let price = document.querySelector("#price")


// attaching an event listener.
form.addEventListener("submit", function(event){
    event.preventDefault()
    let newObj = {
        owner: newOwner.value,
        imageUrl: newImage.value,
        price: price.value
    }

    // creating a new div
    const peopleDiv = document.createElement('div')
    peopleDiv.className = "card"
    peopleDiv.innerHTML = `
        <img src = ${newObj.imageUrl} alt = "Works of art">
        <h4>${newObj.owner}</h4>
        <p> Price: Ksh ${newObj.price}</p>
    `
    let parentContainer = document.getElementById("imageContainer")
    parentContainer.appendChild(peopleDiv)
})


