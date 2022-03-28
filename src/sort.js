import("./utils.js").then(array => {
	document.getElementById("bubble").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block";
		array.generatearray()
		import("./Bubblesort.js")
	})
	document.getElementById("insert").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		array.generatearray()
		import("./Insertion.js")
	})
	document.getElementById("select").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		array.generatearray()
		import("./Selection.js")
	})
	document.getElementById("binary").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		array.generatesortarray()
		import("./binary.js")
	})
	document.getElementById("mybutton").addEventListener("click",()=>{
		data=document.getElementById("myText")
		array.create(data)
	})
})
// var container = document.getElementById("array");
// var flag=false,run=true;
// function generatearray() {
// 	container.innerHTML = "";
// 	var len = 20;
// 	if (flag) {
// 		len = array.length;
// 	}
// 	for (var i = 0; i < len; i++) {
// 		if (!flag)
// 			var value = Math.ceil(Math.random() * 100);
// 		else
// 			var value = array[i];
// 		var array_ele = document.createElement("div");
// 		array_ele.classList.add("block");
// 		array_ele.style.height = `${value * 3}px`;
// 		array_ele.style.transform = `translate(${i * 30}px)`;
// 		var array_ele_label = document.createElement("label");
// 		array_ele_label.classList.add("block_id");
// 		array_ele_label.innerText = value;
// 		array_ele.appendChild(array_ele_label);
// 		container.appendChild(array_ele);
// 	}
// }
// generatearray();
// function start() {
// 	import("./Bubblesort.js").then(sort =>{
//         sort.BubbleSort();
//     });
// }
// function create() {
// 	array = document.getElementById("myText").value;
// 	array = array.split(',').map(Number);
// 	console.log(array);
// 	flag = true;
// 	generatearray();
// }
// function pause(){
// 	run=!run;
// }

