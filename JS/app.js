
//dark tema
const a = document.getElementById("buttonThema")
a.onclick = () => {
    const body = document.getElementById("start")
    const allText = document.getElementsByClassName("text")
    if (Boolean(Number(a.getAttribute("value")))) {
        body.style.transition = "1s"
        body.style.backgroundColor = "black"
        a.setAttribute("value", "0")
        for (let i = 0; i < allText.length; i++) {
            allText.item(i).style.transition = "1s"
            allText.item(i).style.color = "white"
        }
    } else {
        a.setAttribute("value", "1")
        body.style.backgroundColor = "white"
        for (let i = 0; i < allText.length; i++) {
            allText.item(i).style.color = "black"
        }
    }
    for (let i = 0; i < allText.length; i++) {
        allText.item(i).style.transition = "0s"
    }
    body.style.transition = "0"
}









