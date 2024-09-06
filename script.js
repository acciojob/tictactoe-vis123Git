function startGame(e) {
    e.preventDefault();
    const p1name = document.getElementById("player1").value;
    const p2name = document.getElementById("player2").value;
    const container = document.getElementsByClassName("container")[0];
    const inputs = document.getElementsByClassName("inputs")[0];

    if (p1name.trim() && p2name.trim()) {
        inputs.style.display = "none";
        inputs.remove();
        let turn = p1name;
        const game = document.createElement("div");
        const user_turn = document.createElement("div");
        user_turn.className = "message";
        user_turn.innerText = `${turn}, you're up`;

        game.className = "game";

        for (let i = 1; i <= 9; i++) {
            const box = document.createElement("div");
            box.id = i;
            box.className = "box";
            box.addEventListener("click", function (event) {
                if (this.innerText === "") {  // Only allow moves on empty cells
                    if (turn === p1name) {
                        this.innerText = "X";
                        const result = checkWinner(p1name, "X");
                        if (result) {
                            user_turn.innerText = result;
                            disableAllCells();
                        } else {
                            turn = p2name;
                            user_turn.innerText = `${turn}, you're up`;
                        }
                    } else {
                        this.innerText = "O";
                        const result = checkWinner(p2name, "O");
                        if (result) {
                            user_turn.innerText = result;
                            disableAllCells();
                        } else {
                            turn = p1name;
                            user_turn.innerText = `${turn}, you're up`;
                        }
                    }
                }
            });
            game.appendChild(box);
        }
        container.appendChild(user_turn);
        container.appendChild(game);
    }
}

function checkWinner(user, value) {
    const cells = document.getElementsByClassName("box");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let combo of winningCombos) {
        if (cells[combo[0]].innerText === value &&
            cells[combo[1]].innerText === value &&
            cells[combo[2]].innerText === value) {
            return `${user} congratulations you won!`;
        }
    }

    if ([...cells].every(cell => cell.innerText !== "")) {
        return "It's a draw!";
    }

    return null;
}

function disableAllCells() {
    const cells = document.getElementsByClassName("box");
    [...cells].forEach(cell => cell.style.pointerEvents = "none");
}

document.getElementById("submit").addEventListener("click", startGame);