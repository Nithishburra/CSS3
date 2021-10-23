window.onresize=my_fun;
window.onload=my_fun;

function my_fun(){
  let screensize = window.innerWidth;

  document.getElementById("child").innerHTML="screen size:"+screensize;
 
}
