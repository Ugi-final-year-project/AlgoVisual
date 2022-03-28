var container = document.getElementById("array")
var startbtn=document.getElementById("start")
var run=true;
function swap(el1, el2) {
	return new Promise((resolve) => {
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;
		window.requestAnimationFrame(function () {
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}
async function pauseHandler() {
	while (run == false) await sleep(1);
	return;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function BubbleSort(delay = 100) {
	var blocks = document.querySelectorAll(".block");
	startbtn.disabled=true;
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
startbtn.addEventListener("click",()=>{
    BubbleSort();
})
// function create() {
// 	array = document.getElementById("myText").value;
// 	array = array.split(',').map(Number);
// 	console.log(array);
// 	flag = true;
// 	generatearray();
// }
function pause(){
	run=!run;
}
