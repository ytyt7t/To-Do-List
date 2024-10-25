const inputBox=document.getElementById("input-box");
const listConatiner=document.getElementById("listcontainer");

function addTask()
{
    if(inputBox.value === '')
    {
        alert("you must write something !");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerhtml='\u00d7';
        li.appendChild(span);
    }
    inputBox.value=" ";
}
listConatiner.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}.false);

function saveData()
{
   localStorage.setItem("data",list-Conatiner.innerHTML)
}
