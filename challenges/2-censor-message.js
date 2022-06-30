/*
Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: 
all words from the list must be scrubbed out and replaced with five asterisks (*****).
The censor must scrub out matches that are case insensitive.

You may assume that each string in the list is a lowercase single word.
You may assume that there is no punctuation apart from spaces in the full message.
*/

function censorMessage(message, banList) {
    let rawWords = message.split(" ");
    let scrubbedWords = [];
    for (let word of rawWords) {
        let lowerCaseWord = word.toLowerCase();
        if (banList.includes(lowerCaseWord)) {
            scrubbedWords.push("*****");
        } else {
            scrubbedWords.push(word);
        }
    }
    let scrubbedMessage = scrubbedWords.join(" ");
    return scrubbedMessage;
}

//test cases:
//===========
console.log(`censorMessage( "don't mess with cats", ["mess"])`, censorMessage("don't mess with cats", ["mess"]) ,`should be "don't ***** with cats"`)
console.log('censorMessage("Are you sure that this is safe", ["are", "is"]) ', censorMessage("Are you sure that this is safe", ["are", "is"]) ,'should be "***** you sure that this ***** safe"')
console.log('censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])', censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) ,'should be "I CANNOT ***** *****"')
