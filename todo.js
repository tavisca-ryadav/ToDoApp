var showbar,navbar,task,tableContent;

window.addEventListener("load",function(){
	navbar = document.getElementById("navbar");
	showbar = false;
	task = ["Eat","Sleep","Repeat","Running","Study","Youtube","Basketball"];
	tableContent = document.getElementById("content");
	showAll();
});

function showResult(searchContent){
	let content="<tr><th>#</th><th>TASK</th><th>DELETE</th><th>DONE</th></tr>";
	for(let i=1;i<task.length+1;i++){
		if(task[i-1].toLowerCase().includes(searchContent.toLowerCase())){
			content+=(`<td>${i}</td>
				<td id=${task[i-1]}>${task[i-1]}</td>
				<td><button id="delete" onclick="deleteTask()" value=${task[i-1]}>DELETE</span></td>
				<td><button id = "done" onclick="doneTask()" value=${task[i-1]}>DONE</span></td></tr>`);
			}
		}
		tableContent.innerHTML = content;
}

function showAll(){
	let content="<tr><th>#</th><th>TASK</th><th>DELETE</th><th>DONE</th></tr>";
	for(let i=1;i<task.length+1;i++){
		content+=(`<td>${i}</td>
			<td id=${task[i-1]}>${task[i-1]}</td>
			<td><button id="delete" onclick="deleteTask()" value=${task[i-1]}>DELETE</button></td>
			<td><button id ="done" onclick="doneTask()" value=${task[i-1]}>DONE</button></td></tr>`);
	}
	tableContent.innerHTML = content;
}

function deleteTask(){
	var taskToRemove = document.getElementById("delete").value;
	for(let i=0;i<task.length;i++){
		if(taskToRemove==task[i]){
			task.splice(i,1);
			break;
		}
	}
	showAll();
}

function doneTask(){
	var taskDone = document.getElementById("delete").value;
	var textValue = document.getElementById(taskDone); 
	textValue.style.textDecoration = "line-through";
	textValue.style.fontStyle= "italic";
	textValue.style.color = "green";
}

function act(){
	var searchContent = document.getElementById("searchBox").value;
	if(searchContent!=""){
		showResult(searchContent);
	}
}

function addTask(){
	var addContent = document.getElementById("searchBox").value;
	if(addContent!=""){
		task.push(addContent);
		showAll();
	}
	document.getElementById("searchBox").value="";
	showAll();
}


function showBar(){
	if(showbar==false){
		navbar.style.left="0vw";
		showbar=true;
	}
	else{
		navbar.style.left="-22vw";
		showbar=false;
	}
}

function containFun(){
	navbar.style.left="-22vw";
}