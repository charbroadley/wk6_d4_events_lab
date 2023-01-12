document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', (evt) => {
    // document.getElementById("new-item-form").reset();
    evt.preventDefault()
    const readingList = document.querySelector("#reading-list")
    
    const list = document.querySelector("ul")
    //create new li
    const newListItem = document.createElement("li")
    //set text content of li to content from form
    newListItem.textContent = `
    ${evt.target.title.value}
    ${evt.target.author.value}
    ${evt.target.category.value}` 
    //add li to ul using appendChild
    list.appendChild(newListItem)
    console.log(list)
    evt.target.reset()
  })

  const newButton = document.createElement("button")
   = document.querySelector("li")
  
  
})

