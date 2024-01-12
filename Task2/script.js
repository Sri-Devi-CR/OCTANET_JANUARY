function addTask(){
    var task = document.getElementById("task-input");
    var pri = document.getElementById("prior");
    var dead = document.getElementById("deadline");

    var taskTitle = task.value;
    var taskPrior = pri.value;
    var taskEndDate = dead.value;
    console.log(taskEndDate, typeof(taskEndDate));
    //yyyy-mm-dd

    const currdate = new Date();
    var currdatestr = currdate.toISOString().split('T')[0];

    //console.log(currdatestr<=taskEndDate);
    if(taskTitle==""){
        alert("Haven't decided the task yet?");
        return;
    }
    if(currdatestr>taskEndDate){
        alert("Due date has passed by!");
        return;
    }
    
    var taskLi = document.getElementById("tasks-list");
    var taskDiv = document.createElement("div");
    taskDiv.className="added-task not-headings";

    var ttlSpan = document.createElement("span");
    ttlSpan.className="task-title not-headings";
    ttlSpan.textContent = "Task: "+taskTitle;

    var priorSpan = document.createElement("span");
    
    priorSpan.textContent="Priority Set: " + taskPrior;
    if (taskPrior.toLowerCase()=="high"){
        priorSpan.className="prior-high prior not-headings";
    }

    else if(taskPrior.toLowerCase()=="medium"){
        priorSpan.className="prior-medium prior not-headings";
    }
    
    else{
        priorSpan.className="prior-low prior not-headings";
    }

    var deadSpan = document.createElement("span");
    deadSpan.className="dead not-headings";
    deadSpan.textContent = "\nDeadline Set: "+taskEndDate;

    var actionDiv = document.createElement("div");
    actionDiv.className = "actions not-headings";

    var compButton = document.createElement("button");
    compButton.textContent="Check";
    compButton.addEventListener("click",function(){
        //The toggle() function in JavaScript is a method used to display or hide elements on a webpage, based on their current visibility.
        taskDiv.classList.toggle("completed");
        ttlSpan.classList.toggle("completed");
    });

    var editButton = document.createElement("button");
    editButton.textContent="Edit";
    editButton.addEventListener("click",function(){
        var newTitle = prompt("Edit the title [leave it blank if no edit is required]");
        if (newTitle!=""){
            taskTitle=newTitle;
            ttlSpan.textContent = "Task: "+taskTitle;
        }

        var newPrior = prompt("Edit the priority [leave it blank if no edit is required]");
        if(newPrior!="" && (newPrior.toLowerCase()=="high" || newPrior.toLowerCase()=="low" || newPrior.toLowerCase()=="medium")){
            taskPrior=newPrior;
            priorSpan.textContent="\nPriority Set: " + taskPrior;
        }

        var newDead = prompt("Edit the deadline in yyyy-mm-dd format [leave it blank if no edit is required]");
        
        if (newDead!=""){
            taskEndDate=newDead;
            deadSpan.textContent = "\nDeadline Set: "+taskEndDate;
        }
    });

    var delButton = document.createElement("button");
    delButton.textContent="Delete";
    delButton.addEventListener("click",function(){
        taskDiv.remove();
    });

    actionDiv.appendChild(compButton);
    actionDiv.appendChild(editButton);
    actionDiv.appendChild(delButton);

    taskDiv.appendChild(ttlSpan);
    taskDiv.appendChild(priorSpan);
    taskDiv.appendChild(deadSpan);
    taskDiv.appendChild(actionDiv);
    
    taskLi.appendChild(taskDiv);

    task.value = "";
    pri.value = "High";
    dead.value = "";
}