window.addEventListener('DOMContentLoaded', event => {

    const h1 = document.createElement("h1")
    console.log('h1:', h1)
    h1.setAttribute("id", "name")
    h1.innerHTML = "Andrew Moss";

    document.body.appendChild(h1)     ///appending to doc.body




});