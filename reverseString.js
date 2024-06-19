
const reverseString = (input) => {
    let letters = input.split('');
    let reversed = [];
    for (let letter of letters) {
        reversed.unshift(letter);
    }
    reversed = reversed.join('');


    


    // let output = 'olleh';
    return reversed
};

export default reverseString