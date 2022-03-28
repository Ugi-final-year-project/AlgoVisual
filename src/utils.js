var container = document.getElementById("array")
export function generatearray(arr=null) {
	container.innerHTML = "";
	var len = 20;
	if (arr!=null) {
		len = arr.length;
	}
	for (var i = 0; i < len; i++) {
		if (arr==null)
			var value = Math.ceil(Math.random() * 100);
		else
			var value = arr[i];
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
export function generatesortarray() {
    var arr = [];
	container.innerHTML = "";
    for (var i = 0; i < 20; i++) {
        var val = Number(Math.ceil(Math.random() * 100));
        arr.push(val);
    }
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < 20; i++) {
        var value = arr[i];
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
export function create(data) {
	let arr = data.value
	arr = arr.split(',').map(Number);
	generatearray(arr);
}