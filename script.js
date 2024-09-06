function startGame(e) {
	e.preventDefault()
	const p1name = document.getElementById("player-1").value;
	const p2name = document.getElementById("player-2").value;
	const container = document.getElementsByClassName("container")[0];
	const inputs = document.getElementsByClassName("inputs")[0];

	if(p1name.trim() && p2name.trim()){
		
		inputs.display = "none";
		inputs.remove();
		let turn = p1name;
		const game = document.createElement("div");
		const user_turn = document.createElement("h1");

		game.className = "game";

		for (let i = 1; i < 10; i++) {
			const box = document.createElement("div")
			box.id = i;
			box.className = "box"
			box.addEventListener("click", function (event) {
				if (turn == p1name) {
					box.innerText = "X";
					turn = p2name;
					user_turn.innerText = `${turn}, you're up`;
				}else{
					box.innerText = "O";
					turn = p1name;
					user_turn.innerText = `${turn}, you're up`;

				}
			})
			game.append(box);
		}
		user_turn.innerText = `Click to start the game!`;
		container.append(user_turn);

			container.append(game);
		

		
	}

}