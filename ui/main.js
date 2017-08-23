console.log('Loaded!');
// Change the text of the element div
var element=document.getElementById('main-text');
element.innerHTML='new value';
//move the image
var img=document.getElementById('pic');
var marginLeft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function()
{
    var interval=setInterval(moveright,100);
};