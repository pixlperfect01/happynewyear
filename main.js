var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d');
function draw(){
ctx.fillStyle("#000000");
ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle("#FFFFFF");
for(var i=0;i<c.height;i+=2){
for(var ii=0;ii<c.width;ii+=2){
if(Math.random()<.25)
ctx.fillRect(i,ii,2,2);
}
}
window.requestAnimationFrame(draw);
}
