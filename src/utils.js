var container = document.getElementById("array")
var flag=false
export function generatearray() {
	container.innerHTML = "";
	var len = 20;
	if (flag) {
		len = array.length;
	}
	for (var i = 0; i < len; i++) {
		if (!flag)
			var value = Math.ceil(Math.random() * 100);
		else
			var value = array[i];
		var array_ele = document.createElement("div");
		array_ele.classList.add("block");
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}
export function start(e){
    e()
}
function create() {
	array = document.getElementById("myText").value;
	array = array.split(',').map(Number);
	console.log(array);
	flag = true;
	generatearray();
}