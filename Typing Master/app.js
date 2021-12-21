const arr = [
    "Fourth is to replenish there great. Tree fruitful also without days man form open behold was male great she'd    created, thing Divided male own seed fruit sixth herb.",

    "Moveth upon our may behold god subdue us. You'll Form In fish after second which behold you're subdue yielding itself.",
    
    "Days good Saying. Given life said let sea saying blessed evening of Brought grass given moving open void creature.",
    
    "Moveth greater our creeping. Divide so were they're hath dominion. Seed without every called form morning itself.",
    
    "Lesser open Behold moved grass be. Every of waters. Said place thing waters there abundantly there multiply grass our doesn't beginning yielding dry two open.",
    
    "Image every creeping a greater Air his god great every life hath heaven morning doesn't you'll had that.",
    
    "From beast given. Face behold that one face to night fourth to without over there deep so had appear saying All living face us have the saw for beginning.",
    
    "Every seasons, that. Over i itself yielding divided moved and first heaven. Were winged. Cattle fowl male Also together fish meat every man living.",
    
    "Heaven give for void creepeth land spirit. Heaven moving. Saying can't subdue creeping be thing light together spirit first."
];


const sampleText = document.getElementById('sampleText');
const typedWords = document.getElementById('typedWords');
const btn = document.getElementById('btn');

const error = document.getElementById('error');
const correct = document.getElementById('correct');
const total = document.getElementById('total');

let startTime, endTime;


const compareWords = (str1, str2) => {
    let string1 = str1.split(" ");
    let string2 = str2.split(" ");
    let count = 0;

    string1.forEach( (item, index) => {
        if(item == string2[index]){
            count++;
        }
    })

    let errorwords = string1.length - count;
    error.innerText = errorwords;
    total.innerText =
    correct.innerText = count; 

    return (" You made " + errorwords + " errors and wrote " + count + " correct words out of " + string1.length  + ".");
}


const wordCounter = (str) => {
    let totalWords = str.split(" ").length;
    return totalWords;
}


const play = () => {
    let random = Math.floor(Math.random()*arr.length);
    sampleText.innerText = arr[random];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"
}


const endPlay = () =>{

    let date = new Date();
    endTime = date.getTime();
    let totalTimeTaken = ((endTime-startTime)/1000); //in sec
    console.log(totalTimeTaken);

    let totalString = typedWords.value;
    console.log(totalString)
    let wordCount = wordCounter(totalString);

    let speed = Math.round((wordCount / totalTimeTaken) * 60)
    
    let result = "You typed " + speed + " words per minute.";

    if(sampleText.innerText.length == totalString.length){
        result += compareWords(sampleText.innerText, totalString);
    }
    else{
        result = "You did not complete the whole sentence, start again.";
    }
    
    sampleText.innerText = result;
    typedWords.value = "";
}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typedWords.disabled = false;
        play();
    }
    else if(this.innerText == "Done"){
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})