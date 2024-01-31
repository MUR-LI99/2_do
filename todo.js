window.addEventListener("load",()=>{
    let form =document.querySelector("form");
    let input=document.querySelector("#new_taskinp");
    let listEle=document.querySelector("#tasks");
    
    form.addEventListener("submit",e=>{
        e.preventDefault();
        const taskInput=input.value;
        // console.log(taskInput);
        localStorage.setItem("todo",taskInput);
        if(!taskInput){
            alert("Please add a task");
            return;
        }
    
    
        // !task
    const taskEle=document.createElement("div");
    taskEle.classList.add("task")
    
    
    // !content
    
    const contentEle=document.createElement("div");
    contentEle.classList.add("content");
    taskEle.appendChild(contentEle);
    
    // !content input
    const input_task=document.createElement("input");
    input_task.type="text";
    input_task.setAttribute("readonly","readonly");
    input_task.classList.add("task_input");
    input_task.value=taskInput;
    contentEle.appendChild(input_task)
    
    
    // !actions 
    const actionEle=document.createElement("div");
    actionEle.classList.add("actions");
    taskEle.appendChild(actionEle);
    
    // !action button edit
    const action_edit_btn=document.createElement("button");
    action_edit_btn.classList.add("edit");
    action_edit_btn.innerText="Edit";
    actionEle.appendChild(action_edit_btn);
    
    // !action button delete
    const action_delete_btn=document.createElement("button");
    action_delete_btn.classList.add("delete");
    action_delete_btn.innerText="Delete"
    actionEle.appendChild(action_delete_btn);
    
    
      listEle.append(taskEle) ;
      input.value="";
    
    //   !for editing
    action_edit_btn.addEventListener("click",()=>{
        if(action_edit_btn.innerText.toLowerCase()=="edit"){
            input_task.removeAttribute("readonly");
            input_task.focus();
            action_edit_btn.innerText="Save"
        }else{
            input_task.setAttribute("readonly","readonly")
            action_edit_btn.innerText="Edit"
        }
    })
    
    // !for deleting
    action_delete_btn.addEventListener("click",()=>{
        listEle.removeChild(taskEle)
    })
    
    
    
    
    
    })
    
        // !end
    })