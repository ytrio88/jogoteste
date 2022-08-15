
function criar()
{
    console.log(6646)
    let imgs = []
    for (let i of "body,head,calca1,camisa1".split(","))
    {
        let j = new Image()
        j.src = "./images/charparts/" + i +".png"
        j.onload = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            for (let i = 0; i < imgs.length; i++)
                ctx.drawImage(imgs[i], (canvas.offsetWidth * (1 - .65))/2, 0, canvas.offsetWidth * .65, canvas.offsetHeight);
        }
    }
    var canvas = document.getElementById("c2");
    var ctx = canvas.getContext("2d");
    console.log(imgs)
}