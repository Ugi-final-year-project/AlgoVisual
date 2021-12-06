var container = document.getElementById("array");
var startbtn = document.getElementById("startbtn");
var array, flag = false,run=true;
function generatearray() {
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
function swap(el1, el2) {
	return new Promise((resolve) => {
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;
		window.requestAnimationFrame(function() {
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}
async function pauseHandler() {
	console.log('a');
	while (run == false) await sleep(1);
	return;
  }
  
  function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
  }
async function BubbleSort(delay = 100) {
	
	var blocks = document.querySelectorAll(".block");

	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
				.childNodes[0].innerHTML);
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}
			if(!run)
				await pauseHandler();
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}
		blocks[blocks.length - i - 1]
			.style.backgroundColor = "#13CE66";
	}
	startbtn.disabled = false;
}


async function SelectionSort(delay = 100) {
	let bars = document.querySelectorAll(".block");
	 var min_idx = 0;
	 for (var i = 0; i < bars.length; i += 1) {
	
	  min_idx = i;
	
	  bars[i].style.backgroundColor = "darkblue";
	  for (var j = i + 1; j < bars.length; j += 1) {
	
		bars[j].style.backgroundColor = "red";
		
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, 300)
		);
	
		var val1 = parseInt(bars[j].childNodes[0].innerHTML);
	
		var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		  
		if (val1 < val2) {
		  if (min_idx !== i) {
	

			bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
		  }
		  min_idx = j;
		} else {
	
		  bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
		}
	  }
	  var temp1 = bars[min_idx].style.height;
	  var temp2 = bars[min_idx].childNodes[0].innerText;
	  bars[min_idx].style.height = bars[i].style.height;
	  bars[i].style.height = temp1;
	  bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	  bars[i].childNodes[0].innerText = temp2;
		
	  // To pause the execution of code for 300 milliseconds
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, 300)
	  );
	
	  // Provide skyblue color to the (min-idx)th bar
	  bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
	
	  // Provide lightgreen color to the ith bar
	  bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
	
	// To enable the button "Generate New Array" after final(sorted)
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	
	// To enable the button "Selection Sort" after final(sorted)
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
  }


  async function InsertionSort(delay = 600) {
	let bars = document.querySelectorAll(".block");
	
	// Provide lightgreen colour to 0th bar
	bars[0].style.backgroundColor = " rgb(49, 226, 13)";
	for (var i = 1; i < bars.length; i += 1) {
	
	  // Assign i-1 to j
	  var j = i - 1;
	
	  // To store the integer value of ith bar to key 
	  var key = 
	  parseInt(bars[i].childNodes[0].innerHTML);
	
	  // To store the ith bar height to height
	  var height = bars[i].style.height;
	   
	  // For selecting section having id "ele"
	  var barval=document.getElementById("ele")
	
	  // For dynamically Updating the selected element
		//barval.innerHTML=`<h3>Element Selected is :${key}</h3>`;
	
	  //Provide darkblue color to the ith bar 
	  bars[i].style.backgroundColor = "darkblue";
		
	  // To pause the execution of code for 600 milliseconds
	  await new Promise((resolve) =>
	  setTimeout(() => {
		resolve();
	  }, 600)
	);
	
	  // For placing selected element at its correct position 
	  while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		  
		// Provide darkblue color to the jth bar
		bars[j].style.backgroundColor = "darkblue";
		  
		// For placing jth element over (j+1)th element
		bars[j + 1].style.height = bars[j].style.height;
		bars[j + 1].childNodes[0].innerText = 
		bars[j].childNodes[0].innerText;
	
		// Assign j-1 to j
		j = j - 1;
	
		// To pause the execution of code for 600 milliseconds
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, 600)
		);
		  
		// Provide lightgreen color to the sorted part
		for(var k=i;k>=0;k--){
		  bars[k].style.backgroundColor = " rgb(49, 226, 13)";
		}
	  }
	
	  // Placing the selected element to its correct position
	  bars[j + 1].style.height = height;
	  bars[j + 1].childNodes[0].innerHTML = key;
		 
	  // To pause the execution of code for 600 milliseconds
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, 600)
	  );
		
	  // Provide light green color to the ith bar
	  bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}

  }







generatearray();

function start() {
	BubbleSort();
	startbtn.disabled = true;
	
}


function start2() {
	InsertionSort();
	startbtn.disabled = true;
	
}




function start1(){
	SelectionSort();
	startbtn.disabled=true;
}


function create() {
	array = document.getElementById("myText").value;
	array = array.split(',').map(Number);
	console.log(array);
	flag = true;
	generatearray();
}
function pause(){
	run=!run;
}

