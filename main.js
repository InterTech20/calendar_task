
let btn_task=document.querySelector(".btn_task");

let cont_btn = 0, val_fech = '', task_conten=0,	task_menu=1, fec_v=0;
input_disabled(true);

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

function task_option(task_value){

	if (cont_btn==0) {
	 document.querySelector('#option_menu_'+task_value).classList.replace('fa-ellipsis-h', 'fa-times');
	 document.querySelector('#option_del_'+task_value).style.display="block",
	 document.querySelector('#option_edit_'+task_value).style.display="block";
	 cont_btn = 1;
	}else{
	 document.querySelector('#option_del_'+task_value).style.display="none",
	 document.querySelector('#option_edit_'+task_value).style.display="none";
	 document.querySelector('#option_menu_'+task_value).classList.replace('fa-times', 'fa-ellipsis-h');
	 cont_btn = 0;
	}

}


btn_task.addEventListener("click",function(){

	if (cont_btn==0) {
		days_active("auto");
		style_("50px","50px","100px","600px");
		cont_btn = 1;
	} else {
		days_active("none");
		style_("70px","70px","90px","320px");
		input_disabled(true);

		cont_btn = 0;
	}

		from_task_element('from_task','input_translate_initial');
		from_task_element('from_task','input_translate_fin');
		from_task_element('from_task_note','input_translate_initial');
		from_task_element('from_task_note','input_translate_fin');

		from_task_element('btn_','btn_translate');
		from_task_element('task_','fa-tasks');
		from_task_element('task_','fa-check');
		// document.querySelector('.task_option_menu').classList.toggle("disable");
});

function from_task_element(selector_p,selector_s){
	document.querySelector('.'+selector_p+'').classList.toggle(''+selector_s+'');
}

function style_(width_1,height,marginTop,width_2){

	document.querySelector('.btn_').style.width = width_1,
	document.querySelector('.btn_').style.height = height,
	document.querySelector('.btn_').style.marginTop = marginTop,
	document.querySelector('.from').style.width = width_2;
}

function days_active(poner_ev){

for (var i = 1; i < 32; i++) {
	document.querySelector('.fech_num' + i + '').style.pointerEvents 
			= poner_ev;
	document.getElementById('active_' + i + '').classList.toggle("active");
	if(document.getElementById('active_' + i + '').classList=="active_fech"){
	document.querySelector('.fech_num' + i + '').style.pointerEvents 
			= "none";
		}
	
	}

}


function add_task(task){

	let date = new Date();
	document.querySelector('.task_container').innerHTML+= `
	
	<div class="task" id="task_${task_conten++}">
	${create_Task_menu()}
			<div class="task_item1"> ${task}<span>
			${date.getHours()+":"+date.getMinutes()}</span></div>
			<div class="task_item2" id="fec_v${fec_v++}">${getFech_val()} <span>mon</span></div>

		</div>`;

}

function add_note(note){

	document.querySelector('.task_container').innerHTML+= `

	<div class="task">
	${create_Task_menu()}
			<div class="task_item3">${note}</div>
		</div>`;

}

	
function create_Task_menu(){

	return `<div class="task_option">
				<span class="task_option_menu"  onclick="task_option(${task_menu})">
					<i class="fas fa-ellipsis-h" id="option_menu_${task_menu}"></i>
				</span>
				 <span class="task_option_del" id="option_del_${task_menu}" onclick="task_option_del(${task_menu})">
					<i class="fas fa-ban"></i>
				</span>
				<span class="task_option_edit" id="option_edit_${task_menu}" onclick="task_option_edit(${task_menu++})">
					<i class="fas fa-pen"></i>
				</span>
			</div>`;
		
}

function task_option_del(value){
	let capture_val=(document.querySelector('#fec_v'+(value-1)+'').innerHTML).slice(0,2);
	document.querySelector('#active_'+(capture_val)).classList.replace('active_fech', 'active');
	document.querySelector('.fech_num'+capture_val).style.pointerEvents = "auto";
 	document.getElementById("task_con").removeChild(document.getElementById("task_"+(value-1)));

	
}

function task_option_edit(value){

var opcion = confirm("¿Desea editar tarea?");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	alert(mensaje);
}

window.addEventListener("load", function () {
let cont=1;
 	for (var i =1; i <32; i++) {

 		// --------------------------------------------------
 		 if(i<10) {
 			document.querySelector('.days').
 		 innerHTML+='<li class="fech_num'+i+'"  onclick="fech_val('+i+')"><span id="active_'+i+'">0'+
 		i+'</span></li>';

 		 }else{
 		 	document.querySelector('.days').
 		innerHTML+='<li class="fech_num'+i+'" onclick="fech_val('+i+')"><span id="active_'+i+'">'+
 		 i+'</span></li>';
 		}

 		// --------------------------------------------------
 		if(cont==i){
 		document.querySelector('.fech_num'+i+'').style.color="#fa0496";
 			cont+=7;
 			
 		}
 		// --------------------------------------------------
		document.querySelector('.fech_num'+i+'').style.pointerEvents = "none";
 	}
     
});

function setFech_val(value) {
	val_fech = value;
}

function getFech_val() {
	return val_fech;
}

function fech_val(value){
        document.getElementById('active_'+value+'').classList.replace('active', 'active_fech');
		document.querySelector('.fech_num'+value+'').style.pointerEvents = "none";
		input_disabled(false);
		setFech_val(value);
}

function input_disabled(band){
		document.getElementById("task").disabled=band;
		document.getElementById("note").disabled=band;
		document.getElementById("task").value='';
		document.getElementById("note").value='';
}
