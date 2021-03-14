let todo = document.querySelector(".lists")
let list = document.querySelectorAll(".lists > li");
let btn = document.querySelector(".btn");

for (let items of list) {
    console.log(items)

}

const addEvent = () => {
    let span = document.querySelectorAll('.lists .new .close');
    let helps = document.querySelectorAll('.lists .new .helps');

    if (span) {
        for (let close of span) {
            close
                .addEventListener("click", function () {
                    close.parentElement.style.display = "none"
                });
        }
    }

    if (helps) {
        for (let help of helps) {
            help
                .addEventListener("click", function (event) {
                    event.stopPropagation()
                    help
                        .parentElement
                        .classList
                        .toggle("important")

                });
        }
    }
}

let runData = Storage.get("lists");

if (runData) {
    todo.innerHTML = runData;
}

addEvent();

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
        elem.innerHTML = inputValue;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        elem.appendChild(span);
        let imp = document.createElement("span");
        imp.className = "helps";
        imp.innerHTML = "!"
        elem.appendChild(imp);
        elem.addEventListener("click", function (e) {

            elem
                .classList
                .toggle("delete")
        })

        if (inputValue === "") {
            alert("writing")
        } else {

            elem
                .classList
                .add("new")
            todo.appendChild(elem)

            let local = Storage.get("lists");
            if (!local) {
                Storage.set("lists", elem.outerHTML);
                console.log('HTML setted in localStorage');
            } else {
                console.log(local);
                Storage.set("lists", todo.innerHTML);
                todo.innerHTML = Storage.get("lists");
            }
        }

        addEvent();
    });
