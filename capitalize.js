const capitalize = (input) => {
    let letters = input.split('');
    let first = letters[0].toUpperCase();//input.slice(1).toUpperCase()
    letters[0] = first;
    let output = letters.join('');

    // let output = ' //input.toUpperCase();
    return output
}

export default capitalize;