const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeeds = []

inputBtn.addEventListener("click", function() {
  myLeeds.push(inputEl.value)
console.log(myLeeds)
console.log(inputEl)
})

