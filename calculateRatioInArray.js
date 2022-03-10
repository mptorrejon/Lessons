const arr = [-4, 3, -9, 0, 4, 1]
const set = {
    'positive': 0,
    'zero': 0,
    'negative': 0
}

for(let i=0; i<arr.length; i++) {
    
    if(arr[i]<0) {
        set['negative'] = set['negative']+1
    }
    if(arr[i] == 0) {
        set['zero'] = set['zero']+1
    }
    if(arr[i]>0) {
        set['positive'] = set['positive']+1
    }
}
const keys = Object.keys(set);
for(let j=0; j<keys.length; j++ ) {
    console.log("There are ", set[keys[j]] , keys[j])
    console.log("The ratio is", (set[keys[j]]/arr.length).toFixed(6))
}
