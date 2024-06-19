

const analyzeArray = (array) => {
    let avg = 0;
    array.forEach(element => {avg = element + avg})
    let object = {
        average: avg/array.length,
        min : Math.min(...array),
        max : Math.max(...array),
        length : array.length
        }
        return object
    }

export default analyzeArray