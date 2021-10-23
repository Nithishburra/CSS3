window.onresize=my_fun;
window.onload=my_fun;

function my_fun(){
    let screenheight=window.innerHeight;
    document.getElementById("child").innerHTML="screen height:"+screenheight;
}
