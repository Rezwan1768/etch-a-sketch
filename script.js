let divs = [];
const container = document.body.firstElementChild;
container.classList.add("container");

for (let i = 0; i < 256; ++i) {
    const div = document.createElement("div");
    // div.setAttribute("style", "background-color: yellow; width: 50px;");di
    div.classList.add("item");
    div.addEventListener("mouseenter",function () {
        div.style.backgroundColor = "blue";
    });
    divs.push(div);
    container.appendChild(div);
}
