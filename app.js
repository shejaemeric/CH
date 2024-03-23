const mything = document.querySelector("#mything")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

mything.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    mything.classList.toggle("hidden")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })
  
  moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })