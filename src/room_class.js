var puzzle="puzzle";


class roomclass {
    constructor(puzzleType, special,page) {
        this.code = "";
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

function assignPlayer(playerobj){
    var username = document.getElementById("dropdownMenuButton");
    playerobj.username = username.innerText;
    // for(let i =0 ;i<)
    // roomUnlockStatus = []

}

function travel(currRoom, nextRoom) {
    if (room[currRoom] || room[nextRoom]) {
        window.location.href = "../views/"+nextRoom+".html";
    }
}
function solved(currRoom) {
    //placeholder;  Replace with function to set value on server
    room[currRoom]=true;
}

function hide(element) {
    var ele = document.getElementById(element);
    ele.classList.toggle("Active");
    ele.classList.toggle("Inactive");
}

$.get("../cgi-bin/get_player_data.php", function (data) {
    console.log(JSON.parse(data));
});

room1 = new roomclass("cipher", false, "roomno");
room1.codeGenerate();
console.log(room1.code);



