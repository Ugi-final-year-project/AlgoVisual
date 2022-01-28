var container = document.getElementById("array")
let array = await import("./utils.js")
var run = true;
array.generatearray()
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
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}
document.getElementById("start").addEventListener("click",()=>{
    array.start(SelectionSort);
})
