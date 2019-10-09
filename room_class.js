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
    currRoom.state = true;
}

room1 = new room("cipher", false);
room1.codeGenerate();
console.log(room1.code);