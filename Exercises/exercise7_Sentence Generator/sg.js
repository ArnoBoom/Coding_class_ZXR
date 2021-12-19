console.log("it works");

let nouns=["heats", "rainbow", "ocean"];
let verbs=["looks", "runs","make"];
let adjectives=["good","bad","different"];

let noun= nouns[Math.floor(Math.random ()*nouns.length)];
let verb= verbs[Math.floor(Math.random ()*verbs.length)];
let adjective= adjectives[Math.floor(Math.random ()*verbs.length)];

console.log(noun);

let sentence=`My ${noun}${verb}${adjective}`;
console.log(sentence);
let ranks=['a','b','c']

for( let i=0; i<ranks.length; i++){
    console.log(ranks[i]);
}