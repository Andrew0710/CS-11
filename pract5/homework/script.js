/*1*/
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }



/*2*/
function secondLargest(arr) {
    if (arr.length <2 ){ 
        return null;
    }

    let Largest = -Infinity;
    let second  = -Infinity;

    for (let num of arr) {
        if (num > Largest){
            second = Largest;
            Largest = num;
        }
        else if (num > second && num !== largest) {
            second = num; 
        }

    }
    return second
}

console.log(secondLargest([10, 40, 30, 20, 50])); // 40


/*3*/
function isAnagram(str1, str2){
    const s1 = str1.replace(/\s/g, '').toLowerCase();
    const s2 = str1.replace(/\s/g, '').toLowerCase();
    if (s1.length !== s2.length){
        return false
    }
    return [...s1].sort().join('') === [...s2].sort().join('');

}
console.log(isAnagram("listen", "silent")); // true


/*4*/
function twoSum(arr, target) {
    const map = {}; 

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];           
        const need = target - num;    

        if (map.hasOwnProperty(need)) {
            return [map[need], i];    
        }

        map[num] = i;                 

    return null; 
    }
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
}

/*5*/
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = clean.split('').reverse().join('');
    return clean === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false