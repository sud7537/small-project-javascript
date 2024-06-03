const notesContainer=document.querySelector(".notes-container");
const creatbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes()
{
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes();

function updatestorage() {
    localStorage.setItem("notes",notesContainer.innerHTML);
    

    
}

creatbtn.addEventListener("click", ()=>
{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
    
})

notesContainer.addEventListener("click",function (e)
{
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove();
        updatestorage(); 
    }
    else if(e.target.tagName ==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function()
            {
                updatestorage();
            }
        } )
           
    }
})

document.addEventListener("keydown",Event =>
{
    if(Event.key==="enter")
    {
        document.execCommand("insertLinebreak");
        Event.preventDefault();

    }

})

