console.log('Loaded!');
// Change the text of the element div
var element=document.getElementById('main-text');
element.innerHTML='new value';
//move the image
var img=document.getElementById('pic');
img.onclick=function()
{
    img.style.marginleft='100px';
}