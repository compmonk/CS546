const lab1 = require("./lab1");

console.log("questionOne");
console.log(lab1.questionOne([1, 2, 3]));
// 14
console.log(lab1.questionOne([2, 1, 2]));
// 9
console.log(lab1.questionOne([5, 10, 9]));
// 206
console.log(lab1.questionOne([1, 2, 3, 4, 5]));
// 55
console.log(lab1.questionOne([1, 3, 5, 7, 9]));
// 165
console.log()

console.log("questionTwo");
console.log(lab1.questionTwo(7));
// 13
console.log(lab1.questionTwo(8));
// 21
console.log(lab1.questionTwo(10));
// 55
console.log(lab1.questionTwo(-12));
// 0
console.log(lab1.questionTwo(5));
// 5
console.log()

console.log("questionThree");
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));
// 196
console.log(lab1.questionThree("hello"));
// 2
console.log(lab1.questionThree("this dog is a good dog"));
// 7
console.log(lab1.questionThree("When I was a young boy my father took me into the city to see a marching band"));
// 22
console.log(lab1.questionThree("abcdefghijklmnopqrstuvwxyz"));
// 5
console.log();

console.log("questionFour");
console.log(lab1.questionFour(10));
// 3628800
console.log(lab1.questionFour(0));
// 1
console.log(lab1.questionFour(4));
// 24
console.log(lab1.questionFour(-2));
// null
console.log(lab1.questionFour(1));
// 1
console.log();
