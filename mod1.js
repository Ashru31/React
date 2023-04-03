function mycode()
{
    const button1 = document.getElementById("add_button");
    //const formelement = document.getElementById("modform");
       
    const list=document.getElementById("list");

    var t = document.getElementById("mytext").value;
    let element= document.createElement("li");
    element.textContent = t;
    list.appendChild(element);
    element.onclick=function doneTodo(){
        element.style="text-decoration:line-through";
   
    }
   }
 

