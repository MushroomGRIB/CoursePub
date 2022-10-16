// import "./index.css"

let theNum = "0";

let arr = ["EntolomaHochstetteri1", "EntolomaHochstetteri2", "EntolomaHochstetteri3",
    "EntolomaHochstetteri4", "EntolomaHochstetteri5", "EntolomaHochstetteri6",
    "EntolomaHochstetteri7",];

function go_to_right(e) {
    theNum++;
    if (theNum == arr.length) {
        theNum = "0";
    }
    change_image.src = 'assets/' + arr[theNum] + '.jpg';
    OpenImage.href = 'assets/' + arr[theNum] + '.jpg';
    e.preventDefault();
}

function go_to_left(e) {
    theNum--;
    if (theNum == "-1") {
        theNum = arr.length - 1;
    }
    console.log(theNum);
    change_image.src = 'assets/' + arr[theNum] + '.jpg';
    OpenImage.href = 'assets/' + arr[theNum] + '.jpg';
    e.preventDefault();


}