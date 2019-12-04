class JamBuddy{
	constructor() {
		this.notes = [
			"A", "A#", 
			"B", "C", 
			"C#", "D", 
			"D#", "E", 
			"F", "F#", 
			"G", "G#"
		];
		this.selected = ''; 
	}

	clearDomValue(){
		document.getElementById('displayNotes')
			.innerHTML = "";
	}

	setDomValues(results){
		document.getElementById('displayNotes')
			.innerHTML += results[0];

		document.getElementById('displayNotes')
			.innerHTML += results[1];
	}

	selectNotes(){
   		this.clearDomValue()
   		let results, newPos,
   			arr = [...this.notes]
    	
    	for(let i = arr.length - 1; i > 0; i--) {
	        let newPos = Math.floor(Math.random() * (i+1));
	        [arr[i], arr[newPos]] = [arr[newPos], arr[i]];
        }
		results = arr.slice(0,2).sort();
		this.setDomValues(results)
		return this.selected = results 
	};

	checkAnswer(){
		document.getElementById('displayAnswer')
			.innerHTML = '';

		const input = parseInt(document.getElementById('answer')
				.value
		)

		let item2 = this.notes.indexOf(this.selected[1]) + 1,
			item1 = this.notes.indexOf(this.selected[0]) + 1;
		let difference = item2 - item1; 
		
		input === difference 
			? document.getElementById('displayAnswer')
				.innerHTML = `You got it right .Well Done!`
			: document.getElementById('displayAnswer')
				.innerHTML = `Wrong answer! Try again`

	};
}
module.exports = JamBuddy;