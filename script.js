function startGame(e) {
	e.preventDefault()
	const p1name = document.getElementById("player-1");
	const p2name = document.getElementById("player-2");
	const container = document.getElementsByClassName("container")[0];
	if(p1name && p2name){
		for (let i = 1; i < 10; i++) {
			const div = document.createElement("div")
			div.id = i;
		}
	}

}