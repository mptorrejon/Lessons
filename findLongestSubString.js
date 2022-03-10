const s = 'bbbb'

function findLongestSubString(s) {
    let myset = new Set()
    let longest = 0;
    for(let i=0; i<s.length; i++) {
        if( !myset.has(s[i])) {
            myset.add(s[i])
            console.log(myset)
            if(myset.size > longest) {
                longest = myset.size
            }
        } else { 
            myset = new Set() 
            myset.add(s[i])
        }
    }
    return longest
}

const rs = findLongestSubString(s)
console.log(rs)