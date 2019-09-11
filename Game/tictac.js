function sleep(milliseconds) { //.............SleepFunction
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}
function clearScreen() { //........................clearScreen
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}


function printBoard(board) {

    let boardString = '';
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            boardString += ' ';
            boardString += board[i][j];
            boardString += ' '
            if (j != board[i].length - 1) {
                boardString += '|'
            }
        }
        boardString += '\n';
        if (i != board.length - 1) {
            boardString += "------------"
            boardString += '\n';
        }
    }

    return boardString

} //end printBoard

function getWinner(board,symbol) {


}//end getWinner Board

function TicTac() {
    clearScreen()
        //Mengundi pl
    let playerSymbol = [];
    let player1;
    let player2;
    let numRandom = Math.floor(Math.random() * 2);
    if (numRandom == 0) {
        player1 = 'X';
        player2 = 'O';
    } else {
        player1 = 'O';
        player2 = 'X';
    }
    playerSymbol.push(player1);
    playerSymbol.push(player2);


    //Mengundi posisi pemain pada role pertama
    let board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    console.log(printBoard(board));
    sleep(1300);
    clearScreen()

    let firstPosition = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let subPosition = [];
            subPosition.push(i);
            subPosition.push(j);
            firstPosition.push(subPosition)
        }
    }
    for (let i = 0; i < playerSymbol.length; i++) {
        let numRandom = Math.floor(Math.random() * firstPosition.length);
        board[firstPosition[numRandom][0]][firstPosition[numRandom][1]] = playerSymbol[i];
        firstPosition.splice(numRandom, 1)
        console.log(printBoard(board))
        sleep(1300);
        clearScreen()
    }



    let endGame = false;
    let winner = ''

    while (endGame == false) { ////////////////////////////

        for (let turn = 0; turn < playerSymbol.length; turn++) {
            let enemy = ''
            if (playerSymbol[turn] == 'O') {
                enemy = 'X'
            } else {
                enemy = 'O'
            }
            let addSymbol = false;
            //Check Double //////////////////////////////////////////>
            if (endGame == false) {
                for (let i = 0; i < board.length; i++) {
                    for (let j = 0; j < board[i].length; j++) {

                        if (board[i][j] == playerSymbol[turn]) {
                            let findDouble = false;
                            //horizontal check
                            let horizontalCount = 0;
                            for (let s = 0; s < board.length; s++) {
                                if (board[i][s] == playerSymbol[turn]) {
                                    horizontalCount++
                                }
                            }
                            if (horizontalCount == 2) {
                                for (let s = 0; s < board.length; s++) {
                                    if (board[i][s] == ' ') {
                                        board[i][s] = playerSymbol[turn];
                                        endGame = true;
                                        addSymbol = true;
                                        findDouble = true;
                                    }
                                }
                            }
                            //vertical check
                            if (findDouble == false) {
                                let verticalCount = 0;
                                for (let s = 0; s < board.length; s++) {
                                    if (board[s][j] == playerSymbol[turn]) {
                                        verticalCount++
                                    }
                                }
                                if (verticalCount == 2) {
                                    for (let s = 0; s < board.length; s++) {
                                        if (board[s][j] == ' ') {
                                            board[s][j] = playerSymbol[turn]
                                            endGame = true;
                                            addSymbol = true;
                                            findDouble = true;
                                        }
                                    }
                                }
                            }
                            //check firstDiagonal
                            if (findDouble == false) {
                                let diagonalCount = 0;
                                for (let x = 0; x < board.length; x++) {
                                    let y = x;
                                    if (board[x][y] == playerSymbol[turn]) {
                                        diagonalCount++
                                    }
                                }
                                if (diagonalCount == 2) {
                                    for (let x = 0; x < board.length; x++) {
                                        let y = x;
                                        if (board[x][y] == ' ') {
                                            board[x][y] = playerSymbol[turn];
                                            endGame = true;
                                            addSymbol = true;
                                            findDouble = true;
                                        }
                                    }
                                }
                                //checkSecond
                            }
                            //check second diagonal
                            if (findDouble == false) {
                                let diagonalCount = 0;
                                for (let x = 0; x < board.length; x++) {
                                    let y = 2 - x;
                                    if (board[x][y] == playerSymbol[turn]) {
                                        diagonalCount++
                                    }
                                }
                                if (diagonalCount == 2) {
                                    for (let x = 0; x < board.length; x++) {
                                        let y = 2 - x;
                                        if (board[x][y] == ' ') {
                                            board[x][y] = playerSymbol[turn];
                                            endGame = true;
                                            addSymbol = true;
                                            findDouble = true;
                                        }
                                    }
                                }
                            }
                        } //end if///////////////

                    } //ebd loop j
                } //end loop i

            } //end game fill double

            //enemy check ////////////////////////////////////////
            //check Hor;
            if (addSymbol == false) {
                for (let i = 0; i < board.length; i++) {
                    for (let j = 0; j < board.length; j++) {
                        if (addSymbol == false) {
                            if (board[i][j] == enemy) {
                                //check Horizontal
                                let enemyHorCount = 0;
                                for (let s = 0; s < board.length; s++) {
                                    if (board[i][s] == enemy) {
                                        enemyHorCount++
                                    }
                                }
                                if (enemyHorCount == 2) {
                                    for (let s = 0; s < board.length; s++) {
                                        if (board[i][s] == ' ') {
                                            board[i][s] = playerSymbol[turn]
                                            addSymbol = true;
                                        }
                                    }
                                }
                                //check vertical
                                if (addSymbol == false) {
                                    let enemyVerticalCount = 0;
                                    for (let s = 0; s < board.length; s++) {
                                        if (board[s][j] == enemy) {
                                            enemyVerticalCount++
                                        }
                                    }
                                    if (enemyVerticalCount == 2) {
                                        for (let s = 0; s < board.length; s++) {
                                            if (board[s][j] == ' ') {
                                                board[s][j] = playerSymbol[turn]
                                                addSymbol = true;
                                            }
                                        }
                                    }
                                } //end check horizontal
                                if (addSymbol == false) {
                                    let findEnemy = false
                                        //check first diagonal;   
                                    if (i == 0 && j == 0 || i == 2 && j == 2) {
                                        let diagonalEnemyCount = 0;
                                        for (let x = 0; x < board.length; x++) {
                                            let y = x;
                                            if (board[x][y] == enemy) {
                                                diagonalEnemyCount++
                                            }
                                        }
                                        if (diagonalEnemyCount == 2) {
                                            for (let x = 0; x < board.length; x++) {
                                                let y = x;
                                                if (board[x][y] == ' ') {
                                                    board[x][y] = playerSymbol[turn];
                                                    addSymbol = true;
                                                    findEnemy = true;
                                                }
                                            }
                                        }
                                    } //end if first diagonal
                                    //check second Diagonal
                                    if (findEnemy == false) {
                                        if (i == 0 && j == 2 || i == 2 && j == 0) {
                                            let diagonalEnemyCount = 0;
                                            for (let x = 0; x < board.length; x++) {
                                                let y = 2 - x;
                                                if (board[x][y] == enemy) {
                                                    diagonalEnemyCount++
                                                }
                                            }
                                            if (diagonalEnemyCount == 2) {
                                                for (let x = 0; x < board.length; x++) {
                                                    let y = 2 - x;
                                                    if (board[x][y] == ' ') {
                                                        board[x][y] = playerSymbol[turn];
                                                        addSymbol = true;
                                                        findEnemy = true;
                                                    }
                                                }
                                            }
                                        }
                                    } //end secon diagonal search
                                } //////////
                            } //end if find enemy
                        } //end if addSymbol
                    } //end loop j
                } ///end loop i
            } //end game


            // fill the single symbol in Line
            if (endGame == false) {
                for (let i = 0; i < board.length; i++) {
                    for (let j = 0; j < board.length; j++) {
                        if (addSymbol == false) {
                            if (board[i][j] == playerSymbol[turn]) {
                                totalPosition = [];
                                //check horizontal
                                let enemyHorCount = 0;
                                for (let s = 0; s < board.length; s++) {
                                    if (board[i][s] == enemy) {
                                        enemyHorCount++
                                    }
                                }
                                if (enemyHorCount == 0) {
                                    for (let s = 0; s < board.length; s++) {
                                        if (board[i][s] == ' ') {
                                            let rekpos = [];
                                            rekpos.push(i);
                                            rekpos.push(s);
                                            totalPosition.push(rekpos)
                                        }
                                    }
                                }

                                //vertical;
                                let enemyVerticalCount = 0;
                                for (let s = 0; s < board.length; s++) {
                                    if (board[s][j] == enemy) {
                                        enemyVerticalCount++
                                    }
                                }
                                if (enemyVerticalCount == 0) {
                                    for (let s = 0; s < board.length; s++) {
                                        if (board[s][j] == ' ') {
                                            let rekpos = [];
                                            rekpos.push(s);
                                            rekpos.push(j);
                                            totalPosition.push(rekpos)
                                        }
                                    }
                                }

                                //check firstDiagonal;
                                if (i == 0 && j == 0 || i == 2 && j == 2) {
                                    let diagonalEnemyCount = 0;
                                    for (let x = 0; x < board.length; x++) {
                                        let y = x;
                                        if (board[x][y] == enemy) {
                                            diagonalEnemyCount++
                                        }
                                    }
                                    if (diagonalEnemyCount == 0) {
                                        for (let x = 0; x < board.length; x++) {
                                            let y = x;
                                            if (board[x][y] == ' ') {
                                                let rekpos = [];
                                                rekpos.push(x);
                                                rekpos.push(y);
                                                totalPosition.push(rekpos)
                                            }
                                        }
                                    }
                                } //end check first diagonal

                                //check second Diagoal;
                                if (i == 0 && j == 2 || i == 2 && j == 0) {
                                    let diagonalEnemyCount = 0;
                                    for (let x = 0; x < board.length; x++) {
                                        let y = 2 - x;
                                        if (board[x][y] == enemy) {
                                            diagonalEnemyCount++
                                        }
                                    }
                                    if (diagonalEnemyCount == 0) {
                                        for (let x = 0; x < board.length; x++) {
                                            let y = 2 - x;
                                            let rekpos = [];
                                            rekpos.push(x);
                                            rekpos.push(y);
                                            totalPosition.push(rekpos)
                                        }
                                    }
                                }

                                if (totalPosition.length != 0) {
                                    let fillRandom = Math.floor(Math.random() * totalPosition.length);
                                    let x = totalPosition[fillRandom];

                                    board[x[0]][x[1]] = playerSymbol[turn]
                                    addSymbol = true;
                                }

                            }
                        } //end if
                    } //end loop j
                } //end loop i
            } //end fill single symbol

            //findWinner;
            let getWinner = '';
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board.length; j++) {
                    if (board[i][j] == playerSymbol[turn]) {
                        //check horizontal;
                        let countHor = 0;
                        for (let s = 0; s < board.length; s++) {
                            if (board[i][s] == playerSymbol[turn]) {
                                countHor++
                            }
                        }
                        if (countHor == 3) {
                            endGame = true;
                            winner = ` ヾ(￣0￣； )ノ Player ${turn+1} '${playerSymbol[turn]}' WIN!!`
                            getWinner = true;
                        }

                        //check Vertical;
                        if (getWinner == false) {
                            let verCount = 0;
                            for (let s = 0; s < board.length; s++) {
                                if (board[s][j] == playerSymbol[turn]) {
                                    verCount++
                                }
                            }
                            if (verCount == 3) {
                                endGame = true;
                                winner = ` ヾ(￣0￣； )ノ Player ${turn+1} '${playerSymbol[turn]}' WIN!!`
                                getWinner = true;

                            }
                        }

                        //diagonal;
                        if (getWinner == false) {
                            if (i == 0 && j == 0 || i == 2 && j == 2) {
                                let diagonalCount = 0;
                                for (let x = 0; x < board.length; x++) {
                                    let y = x;
                                    if (board[x][y] == playerSymbol[turn]) {
                                        diagonalCount++
                                    }
                                }
                                if (diagonalCount == 3) {
                                    endGame = true;
                                    winner = ` ヾ(￣0￣； )ノ Player '${playerSymbol[turn]}' WIN!!`
                                }
                            }
                            if (i == 0 && j == 2 || i == 2 && j == 0) {
                                let diagonalCount = 0;
                                for (let x = 0; x < board.length; x++) {
                                    let y = 2 - x;
                                    if (board[x][y] == playerSymbol[turn]) {
                                        diagonalCount++
                                    }
                                }
                                if (diagonalCount == 3) {
                                    endGame = true;
                                    winner = ` ヾ(￣0￣； )ノ Player ${turn+1} '${playerSymbol[turn]}' WIN!!`
                                }
                            }
                        }
                    } //end if
                }
            }

            console.log(printBoard(board))
            sleep(1300);
            clearScreen()
            if (addSymbol == false) {
                endGame = true;
            }


        } //end playerSymbol loop

        let count = 0;
        for (let a = 0; a < board.length; a++) {
            for (let b = 0; b < board.length; b++) {
                if (board[a][b] == ' ') {
                    count++
                }
            }
        }
        if (count == 0) {
            endGame = true;
        }
    } //end while ////////////////////////////////////////////////////


    // console.log(printBoard(board))
    if (winner != '') {
        console.log(printBoard(board))
        console.log(winner)
    } else {
        console.log(printBoard(board))
        console.log('DRAW !!!')
    }
} //end function


module.exports = TicTac;