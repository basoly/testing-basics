// caesarCipher: take the last n letters of the alphabet, make a substring and add to original alphabet

// or just have alphabet array and get the correct letter by getting the index of the letter to search
// then if the index + n > 26, get index i-26. 

let alphabet = 'abcdefghijklmnopqrstuvwxyz'


const caesarCipher = (string, num) => {
    let splitString = string.split('');
    let index;
    let newIndex;
    let newString = [];
    for (let char of splitString) {
        if (alphabet.includes(char.toLowerCase())) {
            index = alphabet.indexOf(char.toLowerCase());
            newIndex = index + num;
            if (newIndex > 25) {
                newIndex = newIndex - 26;
            }
            if (!(alphabet.includes(char)) && (alphabet.includes(char.toLowerCase()))) {
                newString.push(alphabet[newIndex].toUpperCase());
            } else {
                newString.push(alphabet[newIndex]);
            }            
            
        } else {
            newString.push(char);
        }

    }

    newString = newString.join('');
    return newString
}

export default caesarCipher