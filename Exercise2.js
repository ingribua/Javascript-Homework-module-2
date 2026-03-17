//Exercise 2
function AddToList(){
    const input = document.getElementById ("userinput");
    const todolist=document.getElementById("todolist");
    const date=document.getElementById("date");
    
    const li = document.createElement("li");
    let inputvalue= input.value;
    let datevalue=date.value;
    

    if(inputvalue !== ""){
//task text
        const text = document.createTextNode(inputvalue);

//checkbox
        const checkbox=document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = false;

        checkbox.addEventListener("change", function(){
            if (checkbox.checked){
                li.classList.add("completed");
            } else{
                li.classList.remove("completed")
            }
        })
// span for styling
const textSpan=document.createElement("span");
textSpan.appendChild(checkbox)
textSpan.appendChild(document.createTextNode(" "+inputvalue))
        todolist.appendChild(li);
        
        li.appendChild(textSpan);
//date
        if(datevalue !== ""){
        const datetext=document.createTextNode("  ( "+datevalue+" )  ");
        li.appendChild(datetext);}
        

//delete button
        const btn= document.createElement("button");
        btn.id="delete-btn";
        btn.textContent="X";
        btn.onclick= function(){
        todolist.removeChild(li);};

        li.appendChild(btn);

        

        input.value="";
        date.value="";

    }
}
