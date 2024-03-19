function bat() {
    var runs = Math.floor(Math.random() * 6) + 1; 
    if (runs === 6) {
        alert("You hit a six!");
    } else if (runs === 4) {
        alert("You hit a boundary!");
    } else if (runs > 0) {
        alert("You scored " + runs + " run(s)!");
    } else {
        alert("You're out!");
    }
}