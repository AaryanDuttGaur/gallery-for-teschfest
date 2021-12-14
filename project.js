const buttonright = document.getElementById("slide-right");
const buttonleft = document.getElementById("slide-left");
const content = document.querySelector("#main");

buttonright.onpointerup = function() {
    content.scrollLeft -= 200;

};
buttonleft.onclick = function() {
    content.scrollLeft += 100;
}