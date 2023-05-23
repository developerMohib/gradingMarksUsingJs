
let marks = parseInt(prompt(`Enter Your Marks : `));


if (marks >= 80 && marks <= 100){
  document.write("Congratulation, you get A+");
}
else if (marks >= 70 && marks <= 79){
  document.write("Congratulation, you get A");
}
else if (marks >= 60 && marks <= 69){
  document.write("Congratulation, you get A-");
}
else if (marks >= 50 && marks <= 59){
  document.write("You get B");
}
else if (marks >= 40 && marks <= 49){
  document.write("You get C. You need Improve.");
}
else if (marks >= 33 && marks <= 39){
  document.write("You get D. You need more Improve." );
}
else if (marks == 0 && marks <= 32){
  document.write("Sorry, you are Fail");
}
else{
  document.write(`Your Number is Invalid. Plz try again. `)
}