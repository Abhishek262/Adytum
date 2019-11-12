var puzzle="puzzle";
class room {
    constructor(puzzleType, special,page) {
        this.state = false;
        this.puzzle = puzzleType;
        this.type = special;
        this.code = "";
        this.page=page;
    }
    codeGenerate() {
        var str = '';
        var res = '';
        for (var j = 0; j < 2; j++) {
            var randByte = parseInt(Math.random() * 16, 10).toString(16);
            res += randByte;
        }
        str += res;
        str += "\n";
        this.code = str;
    }
}
function travel(currRoom, nextRoom) {
    if (currRoom.state || nextRoom.state) {
        window.location.href = nextRoom.page;
    }
}
function solved(currRoom) {
    //placeholder;  Replace with function to set value on server
    currRoom.state = true;
}

function hide(element) {
    var ele = document.getElementById(element);
    ele.classList.toggle("Active");
    ele.classList.toggle("Inactive");
    // if(ele.style.opacity==0){
    //     ele.style.display="none";
    // }
    // else{
    //     ele.style.display="block";
    // }
}

window.onload=function(){
    var hidebtn = document.getElementById("hide");
    hidebtn.addEventListener("click",function(){
        hide("navbar");
        if(hidebtn.innerHTML=="v"){
            hidebtn.innerHTML="^";
        }
        else{
            hidebtn.innerHTML="v";
        }
    },false);
};
room1 = new room("cipher", false, "roomno");
room1.codeGenerate();
console.log(room1.code);