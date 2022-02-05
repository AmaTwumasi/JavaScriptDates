console.log(new Date());

console.log(new Date().getMilliseconds());

let days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
let day = days[new Date().getDay()];
console.log(day);
let year = new Date().getFullYear();
console.log(year);
let months = [
  "jan",
  "feb",
  "mar",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
let month = months[new Date().getMonth()];
console.log(month);
let date = new Date().getDate();
let sentence = `Today is ${day}, ${month} ${date}, ${year}`;
console.log(sentence);

function formatdate(Dates) {
  let days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
  let day = days[new Date().getDay()];
  let months = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];
  let month = months[new Date().getMonth()];
  let date = new Date().getDate();
  let year = new Date().getFullYear();
  let sentence = `Today is ${day}, ${month} ${date}, ${year}`;
  return sentence;
}

console.log(formatdate(new Date()));
