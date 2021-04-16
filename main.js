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
let cont = 0;
let btn_task=document.querySelector(".btn_task");
btn_task.addEventListener("click",function(){


	if (cont==0) {
	
		console.log("primer click");




		// ----------------
		for (var i = 1; i < 32; i++) {
			document.getElementById('active_' + i + '').classList.add("active");
			document.querySelector('.fech_num' + i + '').style.pointerEvents = "auto";
		}

		document.querySelector('.from').style.width = "600px";
		document.querySelector('.from_task_note').classList.remove('input_translate_initial');
		document.querySelector('.from_task_note').classList.add('input_translate_fin');
		document.querySelector('.from_task').classList.remove('input_translate_initial');
		document.querySelector('.from_task').classList.add('input_translate_fin');

		// document.querySelector('.from_task').classList.remove('input_translate_initial');
		
		document.querySelector('.btn_').classList.add('btn_translate');
		document.querySelector('.btn_').style.width = "50px";
		document.querySelector('.btn_').style.height = "50px";
		document.querySelector('.btn_').style.marginTop = "100px";
		document.querySelector('.task_').classList.remove('fa-tasks');
		document.querySelector('.task_').classList.add('fa-check');
		
		cont = 1;
	} else {
		cont = 0;
		console.log("segundo click");
		document.querySelector('.task_').classList.remove('fa-check');
		document.querySelector('.task_').classList.add('fa-tasks');
		document.querySelector('.btn_').classList.remove('btn_translate');
		document.querySelector('.btn_').style.width = "70px";
		document.querySelector('.btn_').style.height = "70px";
		document.querySelector('.btn_').style.marginTop = "90px";
		
		// ----------------

		document.querySelector('.from').style.width = "320px";
		document.querySelector('.from_task_note').classList.remove('input_translate_initial');
		// document.querySelector('.from_task_note').classList.add('input_translate_fin');
		document.querySelector('.from_task').classList.remove('input_translate_initial');
		//  document.querySelector('.from_task').classList.add('input_translate_fin');
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

let val_fech = '';

function setFech_val(value) {
	val_fech = value;
}

function getFech_val() {
	return val_fech;
}

function fech_val(value){
	for (var i =1; i <32; i++) {
		if (value==i) {
document.getElementById('active_'+i+'').classList.remove("active");
document.getElementById("task").disabled=false;
document.getElementById("note").disabled=false;
		setFech_val(value);
		}
	}
}



