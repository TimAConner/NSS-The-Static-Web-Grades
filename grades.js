//List of students' grades
var scoresArray = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
    count: function(){
        countScores(scoresArray);
        return "A: " + this.A + " B: " + this.B + " C: " + this.C + " D: " + this.D + " F: " + this.F;
    }
};

function countScores(scores){
    var smallestValue;
    var largestValue;
    for(var i = 0; i <= scores.length; i++){
        //Add to grade count
        if(scores[i] <= 60){//Grade F
            grades.F ++;
        } else if(scores[i] <= 70 && scores[i] >= 61){//Grade D
            grades.D ++;
        } else if(scores[i] <= 80 && scores[i] >= 71){//Grade C
            grades.C ++;
        } else if(scores[i] <= 90 && scores[i] >= 81){//Grade B
            grades.B ++;
        } else if(scores[i] <= 100 && scores[i] >= 91){//Grade A
            grades.A ++;
        }
    }
}

function lowestScore(scores){
    var lowestValue = scores[0];
    for(var i = 0; i <= scores.length; i++){
        lowestValue = (scores[i] < lowestValue) ? scores[i] : lowestValue;
    }
    return lowestValue;
}

function highestScore(scores){
    var highestValue = scores[0];
    for(var i = 0; i <= scores.length; i++){
        highestValue = (scores[i] > highestValue) ? scores[i] : highestValue; 
    }
    return highestValue;
}

console.log(grades.count());
console.log(lowestScore(scoresArray));
console.log(highestScore(scoresArray));

