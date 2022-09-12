//function takesd an array of 10 single digit ints and returns a phone number '(xxx) xxx-xxxx' 
function createPhoneNumber(numbers){
    numbers = numbers.join('')
    let firstThree = numbers.slice(0, 3)
    let middle = numbers.slice(3, 6)
    let last = numbers.slice(6)
    return `(${firstThree}) ` + `${middle}-` + `${last}`
  }


console.log(createPhoneNumber([5,5,5,5,3,0,1,2,3,4])) // => (555) 530-1234
console.log(createPhoneNumber([4,0,8,8,6,7,5,3,0,9])) // => (408) 867-5309
console.log(createPhoneNumber([8,0,0,3,3,3,1,1,1,1])) // => (800) 333-1111