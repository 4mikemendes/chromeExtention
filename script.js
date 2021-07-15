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

 // listItems += "<li><a target='_blank' href='" + myLeeds[i] + "'>" + myLeeds[i] + "</a></li>"
  listItems += `
    <li>
      <a target='_blank' href= ${myLeeds[i]}>
        ${myLeeds[i]}
      </a>
    </li>`

}
ulEl.innerHTML = listItems
}
