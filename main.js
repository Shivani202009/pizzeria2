var menu=[]

function add(){
    var item=document.getElementById("item").value
menu.push(item);
document.getElementById("item").value=""
}
function show(){
    document.getElementById("output").innerHTML=menu
}