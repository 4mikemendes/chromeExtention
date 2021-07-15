const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeeds = []


inputBtn.addEventListener("click", function() {
 myLeeds.push(inputEl.value)
 inputEl.value = " "
console.log(myLeeds)
renderLeads()
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeeds.length; i++) {
 listItems += "<li>" + myLeeds[i] + "</li>"
}
ulEl.innerHTML = listItems
}
