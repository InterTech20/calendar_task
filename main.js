document.getElementById("task").disabled=true;
document.getElementById("note").disabled=true;

function pulsar_task(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        add_task(document.getElementById("task").value);
        document.getElementById("task").value="";
    }
}

function pulsar_note(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        add_note(document.getElementById("note").value);
        document.getElementById("note").value="";
    }
}

let btn_task=document.querySelector(".btn_task");
btn_task.addEventListener("click",function(){

for (var i = 1; i <32; i++) {
	document.getElementById('active_'+i+'').classList.add("active");
	document.querySelector('.fech_num'+i+'').style.pointerEvents = "auto";
}


});

function add_task(task){
	let date = new Date();
	document.querySelector('.task_container').innerHTML+= `
	<div class="task">
			<div class="task_item1"> ${task}<span>${date.getHours()+":"+date.getMinutes()}</span></div>
			<div class="task_item2">${getFech_val()} <span>mon</span></div>
		</div>`;
}

function add_note(note){
	document.querySelector('.task_container').innerHTML+= `
	<div class="task">
			<div class="task_item3">${note}</div>
		</div>`;
}



window.addEventListener("load", function () {

 	for (var i =1; i <32; i++) {
 		document.querySelector('.days').
 		innerHTML+='<li class="fech_num'+i+'" onclick="fech_val('+i+')"><span id="active_'+i+'">'+
 		i+'</span></li>';
document.querySelector('.fech_num'+i+'').style.pointerEvents = "none";
 	}
     
});

// document.querySelector('.days').
//  		innerHTML+='<li class="fech_num'+i+'" onclick="fech_val('+i+')"><span class="active" id="active_'+i+'">'+
//  		i+'</span></li>';

function fech_val(value){
	for (var i =1; i <32; i++) {'active_'+i+''
		if (value==i) {
document.getElementById('active_'+i+'').classList.remove("active");
document.getElementById("task").disabled=false;
document.getElementById("note").disabled=false;
		setFech_val(value);
		}
	}
}

let val_fech='';

function setFech_val(value){
	val_fech=value;
}

function getFech_val(){
	return val_fech;
}
}
