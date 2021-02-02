window.addEventListener('DOMContentLoaded', event => {

    const h1 = document.createElement("h1")
    console.log('h1:', h1)
    h1.setAttribute("id", "name")
    h1.innerHTML = "Andrew Moss/Sylvia O";

    document.body.appendChild(h1)     ///appending to doc.body

    let ul = document.createElement('ul')
    ul.setAttribute("id", "details")
    document.body.appendChild(ul)
    ul.innerHTML = "<li>programmer</li><li>likes cars</li><li>listens to music</li><li>reads books</li>"


    h1.setAttribute("class", "name")
    ul.setAttribute("class", "detailList")
    // li.setAttribute("class", "detail")
    let allDetails = document.querySelectorAll("li")
    console.log(allDetails)
    allDetails.forEach(function(li) {
        li.setAttribute("class", "detail")
    })
    // console.log(ul)
});
