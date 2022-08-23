
let sreader = [], index = 0, c2 = {
    canvas : document.getElementById("c2"),
    start : function() {
      this.ctx = this.canvas.getContext("2d");
      this.frameNo = 0;
    },
    clear : function() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  } 
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