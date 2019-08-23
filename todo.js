var showbar,navbar,task,tableContent;

window.addEventListener("load",function(){
	navbar = document.getElementById("navbar");
	showbar = false;
	task = ["Eat","Sleep","Repeat","Running","Study"];
	tableContent = document.getElementById("content");
	var searchBox = document.getElementById("se")
	showAll();
});




function showResult(searchContent){
	let content="<tr><th>#</th><th>TASK</th><th>EDIT</th><th>DELETE</th></tr>";
	for(let i=0;i<task.length;i++){
		if(task[i].toLowerCase().includes(searchContent.toLowerCase())){
			content+=(`<tr id="${i}">
			<td>${i+1}</td>
			<td>${task[i]}</td>
			<td><button id = "edit" onclick="editTask(${i})">
			<i class="fa fa-pencil"></i></button></td>
			<td><button id="delete" onclick="deleteTask(${i})">
			<i class="fa fa-trash"></i></button></td>
			</tr>`);
			}
		}
		tableContent.innerHTML = content;
}

function showAll(){	
	let content="<tr><th>#</th><th>TASK</th><th>EDIT</th><th>DELETE</th></tr>";
	for(let i=0;i<task.length;i++){
		content+=(`<tr id="${i}">
			<td>${i+1}</td>
			<td>${task[i]}</td>
			<td><button id = "edit" onclick="editTask(${i})">
			<i class="fa fa-pencil"></i></button></td>
			<td><button id="delete" onclick="deleteTask(${i})">
			<i class="fa fa-trash"></i></button></td>
			</tr>`);
	}
	tableContent.innerHTML = content;
}

function deleteTask(indexToDelete){
	task.splice(indexToDelete,1);
	showAll();
}

function editTask(indexToEdit){
 var taskToEdit = document.getElementById(indexToEdit);
 taskToEdit.childNodes[3].innerHTML = `<input type = 'text' id ="editBox" value=${task[indexToEdit]}>`;
 taskToEdit.childNodes[5].innerHTML=`<button onclick="replace(${indexToEdit})" id="edit">
 <i class="fa fa-check"></i></button>`;
}

function replace(indexToReplace){
	var newValue = document.getElementById("editBox").value;
	if(newValue!=""){
		task[indexToReplace] =  newValue;
	}
	showAll();
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