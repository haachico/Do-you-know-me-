const readLineSync = require("readline-sync");
const chalk = require("chalk");
// const log = console.log;
let score = 0;

const nameInput = readLineSync.question("Hello! May I know your name?\n")

console.log(chalk.bold.bgYellow(`Welcome ${nameInput} to DO YOU KNOW ME? \n`))
console.log(`${nameInput}, there are total 7 questions.
1: You will get 2 points as score on right answer.
2: One point will be deducted on wrong answer.\n`)


function play(question, answer) {
  const quesInput = readLineSync.question(question).toLowerCase();
  const correctAns = answer;

  if (quesInput === correctAns) {
    console.log(`You entered ${quesInput}.`)
    console.log(chalk.bold.greenBright(`Right Answer!`));
    score = score + 2
  } else {
    console.log(`You entered ${quesInput}.`)
    console.log(chalk.bold.red(`Wrong Answer!`))
    score = score - 1;
  }
  if (score < 0) {
    score = 0;
  }
  console.log(chalk.bold.blue.underline(`Score: ${score}\n`))
}

const quesAns = [
  {
    question: `What is my name ?
    a: Nilesh
    b: Tanay
    c: Vinay
    d: Yash\n`,
    answer: `a`
  },
  {
    question: `Where do I live ?
  a : Bangalore
  b: Mumbai
  c: Delhi
  d: Chennai\n`,
    answer: `b`
  },
  {
    question: `In what feild I have done masters ?
  a : Science
  b: Computer Science
  c: Arts
  d: Commerce\n`,
    answer: `d`
  },
  {
    question: `What do i love doing the most ?
  a: Watching movies
  b: Reading books
  c: Going for treks
  d: Dancing\n`,
    answer: `b`
  },
  {
    question: `Who is my favourite writer ?
  a: Benjamin Alire Saenz
  b: John Green
  c: J.K.Rowling
  d: Ocean Vuong\n`,
    answer: `a`
  },
  {
    question: `What is my favourite movie?
    a: Mary and Max
    b: Inside out
    c: Tangled
    d: Frozen`,
    answer: `a`
  },
  {
    question: `What am I currenly learning ?
  a : Literature
  b: Web Development
  c: Singing
  d: A new language\n`,
    answer: `b`

  }
]

for (let i = 0; i < quesAns.length; i++) {
  play(quesAns[i].question, quesAns[i].answer)
}

console.log(`Your total score is ${score} \n`)

const remark = score >= 10 && score <= 12 ? `Remark: You do know quite a lot about me!😀` : score < 10 && score >= 5 ? `Remark: You do know quite a bit about me!😊` : `Remark: You don't know much about me. 🙁`

console.log(chalk.bold.yellowBright.underline(remark)) 