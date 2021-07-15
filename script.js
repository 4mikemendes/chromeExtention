const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeeds = ["fgdhjk", "yutytrree"]
inputBtn.addEventListener("click", function() {
  myLeeds.push(inputEl.value)
console.log(myLeeds)
})

for (let i = 0; i < myLeeds.length; i++) {
 ulEl.innerHTML += "<li>" + myLeeds[i] + "</li>"
 //or more confusing
// const li = document.createElement("li")
//   li.textContent = myLeeds[i]
//   ulEl.append(li)
}

