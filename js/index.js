                                                        // ex 1
const input = document.querySelector("input")
const button = document.querySelector(".btn")
input.addEventListener("change", event => {
    button.textContent = input.value
})
                                                        // ex 2
const title = document.querySelector(".title")
title.textContent = 111
const img = document.querySelector(".img")
img.src = "./img/12.jpg"
                                                        // ex 3
const link = document.querySelector(".link")
link.setAttribute("href", "https://edu.goiteens.com/uk/learn/17138817/15266038/15266398/homework")
const img2 = document.querySelector(".img2")
img2.setAttribute("alt", "galaxy")
                                                        // ex 4
const list = document.querySelector(".list")
list.firstElementChild.textContent = "1"