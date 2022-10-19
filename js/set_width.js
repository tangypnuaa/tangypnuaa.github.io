// set max height
var sh = window.innerHeight;
var sw = window.innerWidth;
console.log(sh)
console.log(sw)
if (sw > 800){
    var lp = document.getElementById('left-pannel');
    var am = document.getElementById('aboutme');
    // $(lp).css("width", "26.3%%");
    // $(am).css("margin-left", "27.5%%");
    lp.style.width="26.3%";
    am.style["margin-left"]="27.5%";
}
