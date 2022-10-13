// import './index.css'


let theNum = "0";

let arr = ["ChlorophosMycena1", "ChlorophosMycena2", "ChlorophosMycena3",
    "ChlorophosMycena4", "ChlorophosMycena5", "ChlorophosMycena6", "ChlorophosMycena7"];

function myFOO() {

    if (theNum == arr.length) {
        theNum = "0";
    }

    change_image.src = 'assets/' + arr[theNum] + '.jpg';

    theNum++;

}

