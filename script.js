/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/



const maxOfThree = (x, y, z) => {
    if ((x > y) && (x > z)) {
        return (console.log('Exercise 2 Result:', x));
    }
    else if ((y > x) && (y > z)) {
        return (console.log('Exercise 2 Result:', y));
    }
    else return (console.log('Exercise 2 Result:', z));
}

maxOfThree(3, 6, 7);




/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/


const isCharAVowel = (char) => {
    if ('aeiou'.includes(char.toLowerCase()))
        return true;
    else return false;
}

// OR 

const isCharAVowels = (char) => {
    char = char.toLowerCase()
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
        return true;
    }
    else return false;
}

    



console.log('Exercise 3 Result:', isCharAVowel('A'));
console.log('Exercise 3 Result:', isCharAVowels('I')); // Second way


/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/
let sum = 0;
const sumArray = (array) => { 
    for (let i = 0; array.length > i; i++) { 
        sum += (array[i]);
    }
    return sum;
}



console.log('Exercise 4 Result:', sumArray([3,10,312,31,34,1,63,53]) );



/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

let value = 1;
const multiplyArray = (array) => { 
    for (let i = 0; array.length > i; i++) { 
        value *= (array[i]);
    }
    return value;
}

console.log('Exercise 5 Result:', multiplyArray([31,3,51,6]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (revString) => { 
    return revString.split("").reverse().join(""); // split string to array, reverse array, and join them.
}




console.log('Exercise 6 Result:', reverseString('dssdad') );

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/
let longest = ''
const longestStringInArray = (array) => { 
    for (let string of array) { 
        if (longest.length  < string.length) { 
            longest = string
        }
        
    }
    return longest;
}


console.log('Exercise 7 Result:',longestStringInArray(['words','worddsss','morewords']));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/
let newArray = []
const stringsLongerThan = (num,array) => { 
    for (let string of array) { 
        if (num < string.length) { 
            newArray.push(string);
        }
        
    }
    return newArray;
}


console.log('Exercise 8 Result:', stringsLongerThan(6,['hello', 'hellooooo', '231312','helloEverybody']) );

// Exercise 9: numArgs
/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/

const numArgs = (arg) => { 
    return arg.length;
}


console.log('Exercise 9 Result:', numArgs(['hi', 4, 'what','okay']));
