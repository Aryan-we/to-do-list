function funct(){
    let data=document.getElementById("input").value;
    let newTask=document.createElement('li');
    let taskList=document.getElementById("task-list");
    if(data.length==0){
        return;
    }
    taskList.appendChild(newTask);
    newTask.innerText=data;
    editTask(newTask);
    document.getElementById("input").value="";
    deleteTask(newTask);
    
}
function deleteTask(newTask){
    let btn=document.createElement("button");
    btn.textContent="Delete";
    newTask.appendChild(btn);
    btn.addEventListener("click",function(){
        newTask.remove();
    })
 
}
function editTask(newTask){
    let btn=document.createElement("button");
    btn.textContent="Edit";
    newTask.appendChild(btn);
    btn.addEventListener("click",function(){
       if(document.getElementById("input").value!=""){
        return;
       }
      let val=newTask.innerText;
       //console.log(val)
       let i=val.indexOf("\n");
       //let i=val.split("");
      // console.log(i)
       //let a=i.indexOf("E");
       
        document.getElementById("input").value=val.slice(0,i);
        newTask.remove();
    })
    
 
}