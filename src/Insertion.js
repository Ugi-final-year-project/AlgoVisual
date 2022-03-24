var container = document.getElementById("array")
var startbtn=document.getElementById("start")
var run = true;
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
async function InsertionSort(delay = 600) {
    let bars = document.querySelectorAll(".block");
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (var i = 1; i < bars.length; i += 1) {
        var j = i - 1; 
        var key =
            parseInt(bars[i].childNodes[0].innerHTML);
        var height = bars[i].style.height;
        var barval = document.getElementById("ele")
        bars[i].style.backgroundColor = "darkblue";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 600)
        );
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            bars[j].style.backgroundColor = "darkblue";
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText =
                bars[j].childNodes[0].innerText;
            j = j - 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 600)
            );
            for (var k = i; k >= 0; k--) {
                bars[k].style.backgroundColor = " rgb(49, 226, 13)";
            }
        }
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 600)
        );
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

}
startbtn.addEventListener("click",()=>{
    InsertionSort();
})