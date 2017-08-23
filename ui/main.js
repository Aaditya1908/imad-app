console.log('Loaded!');
// Change the text of the element div
var element=document.getElementById('main-text');
element.innerHTML='new value';
//move the image
var img=document.getElementById('pic');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+1;
    img.style.marginLeft=marginleft+'px';
}
img.onclick = function()
{
    var interval=setInterval(moveright,50);
};