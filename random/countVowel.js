// function countVowels(str){
//     const vov = 'aeiouAEIOU'
//     let count = 0
//     for (let i = 0; i<str.length; i++){
//         if(vov.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
function countVowels(str){
    // const vov = new Set(['a','e','i','o','u','A','E','I','O','U'])
    const vov = new Set('aeiouAEIOU')
    let count = 0
    for (let i = 0; i<str.length; i++){
        if(vov.has(str[i])){
            count++
        }
    }
    return count
}

console.log(countVowels('javascrIpt'))