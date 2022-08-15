let stop = false
function fa0(){
    document.getElementById("menu").classList.add("hidden")
    document.getElementById("mainp").classList.add("block")
    addText("Antes de começar o jogo, vamos definir como será o seu personagem.")
    addText("agg.")
}
function wait()
{
    if (!stop)
        setTimeout(wait, 1000)
}
function next()
{
    stop = true
}
function addText(a)
{
    document.getElementById("dialogo").innerHTML = a
    wait()
}