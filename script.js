const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeeds = ["jjsjsjsjs", "kskskiiriri", "peloelepeoel", "ppeppepep"]

inputBtn.addEventListener("click", function() {
  myLeeds.push(inputEl.value)
console.log(myLeeds)
console.log(inputEl)
})

for (var i = 0; i < myLeeds.length; i++) {
  console.log(myLeeds[i])
}
