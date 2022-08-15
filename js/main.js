
let sreader = [], index = 0
function fa0(){
    document.getElementById("menu").classList.add("hidden")
    document.getElementById("mainp").classList.add("block")
    sreader = story
    addText(sreader[index].t)
}
function next()
{
    ++index
    addText(sreader[index].t)
    if (sreader[index].a != null)
        eval(sreader[index].a)
}
function addText(a)
{
    document.getElementById("dialogo").innerHTML = a
}