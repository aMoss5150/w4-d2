window.addEventListener('DOMContentLoaded', event => {

    //!!                        CLOCK                              //
    const clock = document.createElement("clock");
    document.body.appendChild(clock)

    const getTime = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes()
        const hours = date.getHours()

        clock.innerText = clock
        clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(getTime, 1000)


    //!!                        ELEMENTS                        //
    const div = document.createElement('div')
    div.setAttribute("id", "bgDiv")
    div.setAttribute("class", "bg")
    document.body.appendChild(div)



    const h1 = document.createElement("h1")
    h1.setAttribute("id", "name")
    h1.innerHTML = "Andrew Moss/Sylvia O";
    document.body.appendChild(h1)     ///appending to doc.body
    // h1.setAttribute("class", "name")
    h1.classList.add("name")

    console.log('h1:', h1)


    let ul = document.createElement('ul')
    ul.setAttribute("id", "details")
    ul.innerHTML = "<li>programmer</li><li>likes cars</li><li>listens to music</li><li>reads books</li>"
    document.body.appendChild(ul)
    ul.setAttribute("class", "detailList")

    let ul2Array = []
    let ul2 = document.createElement("ul")


    console.dir(document.body)

    let allDetails = document.querySelectorAll("li")
    allDetails.forEach(function (li) {
        li.setAttribute("class", "detail")

    })






});
