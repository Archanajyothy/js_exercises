// Create an input field that takes a paragraph of text and always capitalises the first letter of the first word of a sentence.
let str = `hi hello how are you. hello world. 
my name is archana.
i am js developer. i am from kollam.
i am trying to solve a problem.
i want to complete it before evening`;

let sentences = str.split('.');

for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim(); // Remove leading and trailing spaces
    if (sentences[i].length > 0) {
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
    }
}

let newStr = sentences.join('. ');
console.log(newStr);

// let str = `hi hello how are you. hello world. 
// my name is archana.
// i am js developer. i am from kollam.
// i am trying to solve a problem.
// i want to complete it before evening`

//  let newStr = []
//  newStr = str.split('.')
//  //console.log(newStr);
//  for(let i = 0; i<newStr.length; i++){
//     newStr[i][0]= newStr[i].charAt(0).toUpperCase()
//     //fword[0].toUpperCase()
//     console.log(...newStr);
//  }
//  console.log(newStr.length)