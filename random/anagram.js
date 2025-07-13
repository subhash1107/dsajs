function isAnagram(str1, str2) {
     str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
    if (str1.length !== str2.length) return false;
    if(str1===''&&str2==='') return true
    const map = {}
    for(let char of str1){
        map[char]=(map[char]||0)+1
    }
    for(let char of str2){
        if(!map[char]) return false
        map[char]--

    }
    return true
}


//For the purpose of user debugging.
console.log(isAnagram("liften", "silent"));