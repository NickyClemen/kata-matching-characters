/* For this challenge you will be determining the largest number of unique characters between two letters.
have the function MatchingCharacters(str) take the str parameter being passed and determine the largest number of unique characters that
exists between a pair of matching letters anywhere in the string. For example: if str is "ahyjakh" then there are only two pairs of matching letters,
the two a's and the two h's. Between the pair of a's there are 3 unique characters: h, y, and j. Between the h's there are 3 unique characters: y, j, a, and k. So for this example your program should return 4.
Another example: if str is "ghececgkaem" then your program should return 5 because the most unique characters exists within the farthest pair of e characters.
The input string may not contain any character pairs, and in that case your program should just return 0. The input will only consist of lowercase alphabetic characters.

    matchingCharacters('ahyjakh') expect 4
	matchingCharacters('ghececgkaem') expect 5
	matchingCharacters('mmmerme') expect 3
	matchingCharacters('abccdefghi') expect 0
*/


function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

const matchingCharacters = (str) => {
    if (containsUppercase(str)) {
        throw new Error('string should contains lowercase');
    }

    let countWords = 0;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            continue;
        }

        const matchStr = str.slice(i+1, str.length);
        const findLetter = matchStr.indexOf(str[i]);

        if (findLetter !== -1) {
            const slicingResult = matchStr.slice(0, findLetter);

            if (slicingResult.length > countWords) {
                countWords = slicingResult.length;
            }
        }
    }

    return countWords;
}

module.exports = {
    matchingCharacters,
};
