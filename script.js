function del(event)
{
    event.target.parentElement.remove()

}
var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var add=document.getElementById("addpopup")

add.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var con=document.querySelector(".container");
var addbook=document.getElementById("addbook");
var booktitle=document.getElementById("booktitle");
var author=document.getElementById("bookauthor");
var des=document.getElementById("description");

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div") 
    div.setAttribute("class", "book")
    div.innerHTML=`<h2>${booktitle.value}</h2><h4>${author.value}</h4><p>${des.value}</p><button style="background-color: brown;" onclick="del(event)">Delete</button>`
    con.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"   
})
