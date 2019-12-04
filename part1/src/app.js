class JamBuddy{
	constructor() {
	this.notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];	
	}

	selectNotes(){
   		let results, newPos,
   			arr = [...this.notes],
   			tempArr = [...this.notes];

    	for(let i = arr.length - 1; i > 0; i--){
    	    newPos = Math.floor(Math.random() * (i+1));
    	    [arr[i], tempArr[newPos]] = [tempArr[newPos], tempArr[i]];
    	}

		results = tempArr.slice(0,2);
		return results.sort() 
	};

	checkAnswer(num){
		const  selectNotes = this.selectNotes();
		const notes = this.notes;
		let item2 = notes.indexOf(selectNotes[1]) + 1,
			item1 = notes.indexOf(selectNotes[0]) + 1;
		let distance = item2 - item1; 
		return (num === distance) 
			? true
			: false
	};
}
module.exports = JamBuddy;