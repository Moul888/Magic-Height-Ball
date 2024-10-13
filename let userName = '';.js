let userName = '';
if (userName) {
  console.log(`Hello ${userName}!`)
} else {
  console.log('Hello')
};

let userQuestion ='Will i become rich ?';
if (userName) {
  console.log(`${userName} asked if he/she become rich?`)
} else {
  console.log('Will i become rich')
};

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
  case 1 :
  eightBall = ('It is certain')
  break;
  case 2 :
  eightBall = ('It is decidedly so')
  break;
  case 3 :
  eightBall = ('Reply hazy try again')
  break;
  case 4 :
  eightball = ('Cannot predict now')
  break;
  case 5 :
  eightBall = ('Do not count on it')
  break;
  case 6 :
  eightBall = ('My source say no')
  break;
  case 7 :
  eightBall = ('Outlook not so good')
  break;
  case 8 :
  eightBall = ('Signs point to yes')
  break;
}

console.log(`The Magic Eight Ball's say ${eightBall}!`)
