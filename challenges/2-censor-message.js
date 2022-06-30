/*
Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: 
all words from the list must be scrubbed out and replaced with five asterisks (*****).
The censor must scrub out matches that are case insensitive.

You may assume that each string in the list is a lowercase single word.
You may assume that there is no punctuation apart from spaces in the full message.
*/

function censorMessage(message, banList) {
    let rawWords = 
}
set RAW_WORDS to the list of strings created by separating the string message into sub-strings at every space (' ')

set SCRUBBED_WORDS to an empty list

for each string, WORD, in RAW_WORDS
	set LOWERCASE_WORD to lowercase(word)
  if LOWERCASE_WORD is contained in the list BAN_LIST
    insert the string '*****' at the end of SCRUBBED_WORDS
  else
    insert WORD at the end of SCRUBBED_WORDS

set SCRUBBED_MESSAGE to the string created by joining together every string in SCRUBBED_WORDS with a space (' ') as a join character

return SCRUBBED_MESSAGE

//test cases:
//===========
console.log('censorMessage("don't mess with cats", ["mess"])',censorMessage("don't mess with cats", ["mess"]) ,'should be "don't ***** with cats"')
console.log('censorMessage("Are you sure that this is safe", ["are", "is"]) ',censorMessage("Are you sure that this is safe", ["are", "is"]) ,'should be "***** you sure that this ***** safe"')
console.log('censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])',censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) ,'should be "I CANNOT ***** *****"')
