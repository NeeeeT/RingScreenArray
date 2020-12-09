var drawToggle = false;

window.onload = () => {
    DrawInit();
    SceneInit();
    RegisterBtn();
}
DrawInit = () => {
    window.addEventListener("keydown", (event) => {
        if (event.code == "Space") {
            drawToggle = !drawToggle;
        }
    })
}
SceneInit = () => {
    let app = document.getElementById("app");
    let colLength = 100;
    let rowLength = 16;
    app.innerHTML = ``;
    for (let j = 0; j < rowLength; j++) {
        app.innerHTML += `<div id="${j}"><div>`;
        let col = document.getElementById(j);
        col.innerHTML = ``;
        for (let i = 0; i < colLength; i++) {
            col.innerHTML += `<div class="dot" id={${j},${i}} x="${j}" y="${i}">○</div>`;
        }
    }
    app.innerHTML += `<div><a id="exportArr" href="#">輸出圖像陣列</a></div>`;
}
RegisterBtn = () => {
    let dot = document.getElementsByClassName("dot");
    let exp = document.getElementById("exportArr");
    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("mouseenter", () => {
            if (!drawToggle) return;
            dot[i].innerText = dot[i].innerText == '○' ? '●' : '○';
        });
        dot[i].addEventListener("click", () => {
            dot[i].innerText = dot[i].innerText == '○' ? '●' : '○';
        })
    }
    exp.addEventListener("click", () => {
        let tempArr = [];
        // let xArr = [];
        // let yArr = [];
        for (let i = 0; i < dot.length; i++) {
            if (dot[i].innerText == "●"){
                tempArr.push(dot[i].id);
            }
        }
        console.log(tempArr);
    })
}