import("./utils.js").then(array => {
	document.getElementById("bubble").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block";
		document.getElementById("algotitle").innerHTML="Bubble Sort";
		array.generatearray()
		import("./Bubblesort.js")
	})
	document.getElementById("insert").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		document.getElementById("algotitle").innerHTML="Insertion Sort";
		array.generatearray()
		import("./Insertion.js")
	})
	document.getElementById("select").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		document.getElementById("algotitle").innerHTML="Selection Sort";
		array.generatearray()
		import("./Selection.js")
	})
	document.getElementById("binary").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		document.getElementById("algotitle").innerHTML="Binary Search";
		array.generatesortarray()
		import("./binary.js")
	})
	document.getElementById("linear").addEventListener("click", () => {
		document.getElementById("startbu").style.display = "block"
		document.getElementById("algotitle").innerHTML="Linear Search";
		array.generatearray()
		import("./linear.js")
	})
	document.getElementById("mybutton").addEventListener("click",()=>{
		data=document.getElementById("myText")
		array.create(data)
	})
})