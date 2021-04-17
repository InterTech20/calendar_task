
let btn_task=document.querySelector(".btn_task");

let cont = 0,val_fech = '';

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

function task_option(){
	if (cont==0) {console.log("-2 ->"+vue++);
	document.querySelector('.task_menu').classList.remove('fa-ellipsis-h');
	document.querySelector('.task_menu').classList.add('fa-times');
	document.querySelector('.task_option_del').style.display="block";
	document.querySelector('.task_option_edit').style.display="block";
	cont = 1;
	}else{console.log("-3 ->"+vue++);
	document.querySelector('.task_option_del').style.display="none";
	document.querySelector('.task_option_edit').style.display="none";
	document.querySelector('.task_menu').classList.remove('fa-times');
	document.querySelector('.task_menu').classList.add('fa-ellipsis-h');
	cont = 0;
	}
	

}


btn_task.addEventListener("click",function(){

	if (cont==0) {

		days_active("add","auto");
		// ---------------------------------------------------------
		style_("50px","50px","100px","600px");
		// ---------------------------------------------------------
		add_or_remove('from_task','remove','input_translate_initial');
		add_or_remove('from_task','add','input_translate_fin');
		add_or_remove('from_task_note','remove','input_translate_initial');
		add_or_remove('from_task_note','add','input_translate_fin');

		add_or_remove('btn_','add','btn_translate');
		add_or_remove('task_','remove','fa-tasks');
		add_or_remove('task_','add','fa-check');

		cont = 1;
	
	} else {

		days_active("remove","none");
		// ---------------------------------------------------------
		style_("70px","70px","90px","320px");
		// ---------------------------------------------------------
		add_or_remove('from_task','remove','input_translate_fin');
		add_or_remove('from_task','add','input_translate_initial');
		add_or_remove('from_task_note','remove','input_translate_fin');
		add_or_remove('from_task_note','add','input_translate_initial');
		
		add_or_remove('btn_','remove','btn_translate');
		add_or_remove('task_','remove','fa-check');
		add_or_remove('task_','add','fa-tasks');
		
		input_disabled(true);
		
		cont = 0;

	}
	
});

function add_or_remove(selector_p,acction_selec,selector_s){

	if(acction_selec=="add"){
	document.querySelector('.'+selector_p+'').classList.add(''+selector_s+'');
	}else{
	document.querySelector('.'+selector_p+'').classList.remove(''+selector_s+'');
	}

}

function style_(width_1,height,marginTop,width_2){
	document.querySelector('.btn_').style.width = width_1;
	document.querySelector('.btn_').style.height = height;
	document.querySelector('.btn_').style.marginTop = marginTop;
	document.querySelector('.from').style.width = width_2;
}
// var da=[];
function days_active(buttn,poner_ev){

for (var i = 1; i < 32; i++) {

 // da.push(getFech_val()); 
		if (buttn=="add") {
			// if (i==da[da.length - 1]) {
			// 	document.getElementById('active_' + i + '').classList.add("active_fech");
			// 	document.querySelector('.fech_num' + i + '').style.pointerEvents 
			// = "none";
			// 	da.forEach(element => console.log(element));
			// 	 console.log("->"+da);
			// }else{
			// document.getElementById('active_' + i + '').classList.add("active");	
		
			// }
			document.getElementById('active_' + i + '').classList.add("active");	
		}

		else{
			document.getElementById('active_' + i + '').classList.remove("active");
		}	
	
			document.querySelector('.fech_num' + i + '').style.pointerEvents 
			= poner_ev;
	}

}

function add_task(task){

	let date = new Date();
	document.querySelector('.task_container').innerHTML+= `
	
	<div class="task">
	${create_Task_menu()}
			<div class="task_item1"> ${task}<span>
			${date.getHours()+":"+date.getMinutes()}</span></div>
			<div class="task_item2">${getFech_val()} <span>mon</span></div>

		</div>`;

}

function add_note(note){

	document.querySelector('.task_container').innerHTML+= `
	
	<div class="task">
	${create_Task_menu()}
			<div class="task_item3">${note}</div>
		</div>`;

}
	let vue=0;
function create_Task_menu(){
	console.log("-1 ->"+vue++);
	//${vue++}
	return `<div class="task_option">
				<span class="task_option_menu" onclick="task_option()">
					<i class="fas task_menu  fa-ellipsis-h"></i>
				</span>
				 <span class="task_option_del">
					<i class="fas fa-ban"></i>
				</span>
				<span class="task_option_edit">
					<i class="fas fa-pen"></i>
				</span>
			</div>`;
		
}

window.addEventListener("load", function () {
let cont=1;
 	for (var i =1; i <32; i++) {
 		/*******add cero numero menores que 10*********/
 		 if(i<10) {
 			document.querySelector('.days').
 		 innerHTML+='<li class="fech_num'+i+'"  onclick="fech_val('+i+')"><span id="active_'+i+'">0'+
 		i+'</span></li>';

 		 }else{
 		 	document.querySelector('.days').
 		innerHTML+='<li class="fech_num'+i+'" onclick="fech_val('+i+')"><span id="active_'+i+'">'+
 		 i+'</span></li>';
 		}
		/*******end add cero numero menores que 10*********/
 		if(cont==i){
 		document.querySelector('.fech_num'+i+'').style.color="#fa0496";
 			cont+=7;
 			
 		}
 		
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
		document.getElementById('active_'+value+'').classList.remove("active");
		document.getElementById('active_'+value+'').classList.add("active_fech");
		input_disabled(false);
		setFech_val(value);
}

function input_disabled(band){
		document.getElementById("task").disabled=band;
		document.getElementById("note").disabled=band;
		document.getElementById("task").value='';
		document.getElementById("note").value='';
}


