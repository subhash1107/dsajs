function validatePalindrome(str) {
    return (s = str.trim().replace(/[!@#$%, .*+?^${}()|[\]\\,]/g, '').toLowerCase()) === [...s].reverse().join('');
}



console.log(validatePalindrome("race a car"))

const str = 'something'
console.log([...str].reverse())