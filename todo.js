var showbar,navbar,task,tableContent;

window.addEventListener("load",function(){
	navbar = document.getElementById("navbar");
	showbar = false;
	task = ["Eat","Sleep","Repeat","Running","Study","Youtube","Basketball"];
	tableContent = document.getElementById("content");
	showAll();
});

function showResult(searchContent){
	let content="<tr><th>#</th><th>TASK</th><th>EDIT</th><th>DELETE</th></tr>";
	for(let i=1;i<task.length+1;i++){
		if(task[i-1].toLowerCase().includes(searchContent.toLowerCase())){
			content+=(`<td>${i}</td>
				<td>${task[i-1]}</td>
				<td><button id = "edit" onclick="editTask()" value=${task[i-1]}>
				<i class="fa fa-pencil"></i></span></td>
				<td><button id="delete" onclick="deleteTask()" value=${task[i-1]}>
				<i class="fa fa-trash"></i></span></td>
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
	task[indexToReplace] =  document.getElementById("editBox").value;
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