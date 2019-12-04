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
		this.streakCount = []; 
	}

	clearDomValue(){
		document.getElementById('displayNotes')
			.innerHTML = "";
		document.getElementById('explanation')
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
   			arr = [...this.notes];
    	
    	for(let i = arr.length - 1; i > 0; i--) {
	        let newPos = Math.floor(Math.random() * (i+1));
	        [arr[i], arr[newPos]] = [arr[newPos], arr[i]];
        };

		results = arr.slice(0,2).sort();
		this.setDomValues(results);
		return this.selected = results;
	};

	streak(){
		let elem = document.getElementById('displayStreak');
		let streakLength = this.streakCount.length - 1;
		
		if(this.streakCount[streakLength]
			&& this.streakCount[streakLength]
			=== this.streakCount[streakLength - 1]){
				elem.innerHTML = parseInt(elem.innerHTML) + 1; 
		}
		else{
				elem.innerHTML = 0;
		}
	}

	checkAnswer(){
		document.getElementById('displayAnswer')
			.innerHTML = '';

		const input = parseInt(document.getElementById('answer')
				.value
		);

		let item2 = this.notes.indexOf(this.selected[1]) + 1,
			item1 = this.notes.indexOf(this.selected[0]) + 1;
		let difference = item2 - item1; 
		
		this.reveal();

		input === difference 
			? (this.streakCount.push(true)
				, document.getElementById('displayAnswer')
					.innerHTML = `You got it right .Well Done!`)
			: (this.streakCount.push(false)
				, document.getElementById('displayAnswer')
					.innerHTML = `Wrong answer! Try again`)
		this.streak()
	};


	reveal(){
		let elem = document.getElementById('explanation');
		elem.innerHTML = "";
		
		for(let i=0;i<this.notes.length;i++){
			if(this.notes[i] === this.selected[0]
				|| this.notes[i] === this.selected[1]){
				elem.innerHTML += `
					<li style="color:red">${this.notes[i]} </li>`;
			}
			else{
				elem.innerHTML += `${this.notes[i]}`
			};
		};
	};
};
// module.exports = JamBuddy;