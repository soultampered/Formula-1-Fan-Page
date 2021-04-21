

var points = [
	{	
		finishedPosition: 1,
		points: 25,
		classification: 1
	},
	
	{	
		finishedPosition: 2,
		points: 18,
		classification: 2
	},
	
	{	
		finishedPosition: 3,
		points: 15,
		classification: 3
	},
	
	{	
		finishedPosition: 4,
		points: 12,
		classification: 4
	},
	
	{	
		finishedPosition: 5,
		points: 10,
		classification: 5
	},
	
	{	
		finishedPosition: 6,
		points: 8,
		classification: 6
	},
	
	{	
		finishedPosition: 7,
		points: 6,
		classification: 7
	},
	
	{	
		finishedPosition: 8,
		points: 4,
		classification: 8
	},
	
	{	
		finishedPosition: 9,
		points: 2,
		classification: 9
	},
	
	{	
		finishedPosition: 10,
		points: 1,
		classification: 10
	},

	{	
		finishedPosition: 11,
		points: 0,
		classification: 11
	},
	
	{	
		finishedPosition: 12,
		points: 0,
		classification: 12
	},
	
	{	
		finishedPosition: 13,
		points: 0,
		classification: 13
	},
	
	{	
		finishedPosition: 14,
		points: 0,
		classification: 14
	},
	
	{	
		finishedPosition: 15,
		points: 0,
		classification: 15
	},
	
	{	
		finishedPosition: 16,
		points: 0,
		classification: 16
	},
	
	{	
		finishedPosition: 17,
		points: 0,
		classification: 17
	},
	
	{	
		finishedPosition: 18,
		points: 0,
		classification: 18
	},
	
	{	
		finishedPosition: 19,
		points: 0,
		classification: 19
	},
	
	{	
		finishedPosition: 20,
		points: 0,
		classification: 20
	}];

function championshipOrder() {
	for (var i = 0; i <= (points.finishedPosition - 1); i++) { 
		if (points[i].finishedPosition < 10) {
			<placeholder> = (points[i].points + 1) && <placeholder> = points[i].classification
		} else {
			<placeholder> = points[i].points && <placeholder> = points[i].classification
		}
	}

