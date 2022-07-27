let words = [
  {
    word: "home",
    hint: "a place to live",
  },
  {
    word: "js",
    hint: "programming language",
  },
  {
    word: "guitar",
    hint: "Musical instrument",
  },
  {
    word: "tamer",
    hint: "generation star",
  },
  {
    word: "coffee",
    hint: "a place to drink",
  },
  {
    word: "game",
    hint: "something to enjoy",
  },
  {
    word: "beach",
    hint: "A place to calm the nerves",
  },
  {
    word: "love",
    hint: " affection and tenderness felt by lovers",
  },
];
let inputs=document.querySelector(".inputs");
let reset=document.querySelector(".reset-button");
let hint=document.querySelector(".hint span")
let typing=document.querySelector(".typing-input")
let wrong=document.querySelector(".wrong-letter span")
let guess=document.querySelector(".guess-left span")


let wordChoose,maxGuess,correct=[],incorrect=[];
function randomWord() {
  let random = words[Math.floor(Math.random() * words.length)];
   wordChoose=random.word
   maxGuess=8,correct=[],incorrect=[];
  hint.innerHTML=random.hint;
  guess.innerHTML=maxGuess
  wrong.innerHTML=incorrect
  let text=""
  for (let i = 0; i < wordChoose.length; i++) {

    text +='<input type="text" disabled>'
  }
  inputs.innerHTML=text;
}
randomWord()
function ingame(e){
  let value=e.target.value
  if (value.match(/^[A-Za-z]+$/)&& !incorrect.includes(value)&& !correct.includes(value)) {
    if(wordChoose.includes(value)){
      for (let i = 0; i < wordChoose.length; i++) {
        if(wordChoose[i]==value){
          correct.push(value)
          inputs.querySelectorAll("input")[i].value=value
        }
      }
    }else{
      maxGuess--;
      incorrect.push(`${value}`)
    }
    guess.innerHTML=maxGuess

  wrong.innerHTML=incorrect

  }
  typing.value=""
 setTimeout(()=>{
  if(correct.length==wordChoose.length){
    alert(`congrates you found the word ${wordChoose.toUpperCase()}`)
    randomWord()
  }else if (maxGuess<1) {
    alert(`sorry you can't fount the word ${wordChoose.toUpperCase()}`)
    for (let i = 0; i < wordChoose.length; i++) {
      
        inputs.querySelectorAll("input")[i].value=wordChoose[i]
    }
  }
 })
}
reset.addEventListener("click",randomWord)
typing.addEventListener("input",ingame)
inputs.addEventListener("click",()=> typing.focus())
document.addEventListener("keydown",()=> typing.focus())

