import { loadInput } from "../../lib";

const input = await loadInput(2023, 1);
const lines = input.split("\n");


const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const wordMap = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',

}
const nums = "1234567890";
let sum = 0;
lines.forEach((line) => {
  let first: null | string = null,
    last: null | string = null;
  for (let i = 0; i < line.length; i++) {
    if (nums.includes(line[i])) {
      last = line[i];
      if (first === null) first = line[i];
    } else {
			for (const word of words) {
				// if the word exists starting at char i
				if (line.substr(i, word.length) === word) {
					console.log(wordMap[word], line, i)
					last = wordMap[word];
					if (first === null) first = wordMap[word];
				}
			}
		}
  }
	// @ts-ignore
  sum += parseInt(first + last);
});


console.log(sum)