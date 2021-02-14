let todo = document.querySelector(".lists")
let list = document.querySelectorAll(".lists > li");
let btn = document.querySelector(".btn");

for (let items of list) {
    console.log(items)

}

for (let i = 0; i < list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
    list[i].addEventListener("click", function () {
        alert('yes')
    })
}

btn
    .addEventListener("click", function (ev) {

        ev.stopPropagation()
        let elem = document.createElement("li");

        let inputValue = document
            .getElementById("listValue")
            .value
        elem.innerHTML = inputValue
        if (inputValue === "") {
            alert("writing")
        } else {
            elem
                .classList
                .add("new")
            todo.appendChild(elem)

            let local = localStorage.getItem("lists", elem)
            if (local !== null) {
                localStorage.setItem("html", elem.outerHTML);
                console.log('HTML setted in localStorage');
            } else 
                console.log(local);

            }
        
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        elem.appendChild(span);
        let imp = document.createElement("span");
        imp.innerHTML = "!"
        elem.appendChild(imp);
        elem.addEventListener("click", function (e) {

            elem
                .classList
                .toggle("delete")
        })
        span.addEventListener("click", function () {
            span.parentElement.style.display = "none"
        })
        imp.addEventListener("click", function (event) {
            event.stopPropagation()
            elem
                .classList
                .toggle("important")

        })

    })
