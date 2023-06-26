/*const superbowlWin = (array) => {
    array.forEach(element => {
        
    });
}*/

function superbowlWin(record) {
    const winGame = record.find(game => game.result === "W");
    return winGame ? winGame.year : undefined;
  }