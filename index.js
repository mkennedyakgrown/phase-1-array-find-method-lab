// code your solution here

function isW(element) {
    if (element.result === "W") {
        return element.year;
    }
}

function superbowlWin(record) {
    const win = record.find(isW);
    if (win === undefined) {
        return win;
    } else {
    return win.year;
    }
}