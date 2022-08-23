
function criar()
{
    console.log(464)
    c2.start()
     let i1 = new Image()
     i1.src = "images/charparts/body.png"
    console.log(i1)
    let img1 = new drawfigure(100,250,i1,0,0)
}
function drawfigure(w,h,img,x,y)
{
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = c2.context;
        ctx.drawImage(img,
          this.x,
          this.y,
          this.w, this.h);
    }
}