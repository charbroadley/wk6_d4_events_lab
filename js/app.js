document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', (evt) => {
    
    evt.preventDefault()

    const readingList = document.querySelector("ul")
    //create new li
    const readingListItem = document.createElement("li")
    // add a class to the li for css later

    //set text content of li to content from form
    readingListItem.textContent = `
    ${evt.target.title.value}
    ${evt.target.author.value}
    ${evt.target.category.value}` 
    //add li to ul using appendChild
    readingList.appendChild(newListItem)
    // console.log(list)
    // to reset the whole form after the info has been appended to the list
    evt.target.reset()
  })

  // BUTTON
  // add a button to the html
  // add eventListener "click"
  // const readingList = querySelector ("#reading-list")
  // readingList.innerHTML = ""
  
})

// to help improve accessibility and SEO:
// create an li, inside the li:
//    -> create a h2 (title)
//      ->  create a h3 (author)
//          -> create a p (categore)


// functions: 
// Create reading list item. Inside this functions to create h2, h and p. Create reading list item returns all these things.


// createReadingListItem
// querySelector ('#reading-list)
// appendChild

