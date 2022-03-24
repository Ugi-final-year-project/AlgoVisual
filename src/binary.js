var startbtn=document.getElementById("start")
async function BinarySearch(delay = 300) {
    var blocks = document.querySelectorAll(".block");
    var num = document.getElementById("myText").value;
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }
    var start = 0;
    var end = 19;
    var flag = 0;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        blocks[mid].style.backgroundColor = "#FF4949";
        var value = Number(blocks[mid].childNodes[0].innerHTML);
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        if (value == num) {
            alert("Element Found");
            blocks[mid].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
        if (value > num) {
            end = mid - 1;
            blocks[mid].style.backgroundColor = "#6b5b95";
        } else {
            start = mid + 1;
            blocks[mid].style.backgroundColor = "#6b5b95";
        }
    }
    if (flag === 0) {
        alert("Element Not Found");
    }
}
startbtn.addEventListener("click",()=>{
    BinarySearch();
})