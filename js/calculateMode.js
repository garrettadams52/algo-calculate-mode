//const calculateMode = () => {}

function calculateMode(arr){
    let ans = []

    //create map
    let map = new Map()
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i]))
            map.set(arr[i], 1)
        else
            map.set(arr[i],map.get(arr[i])+1)
    }

    //sort map by values
    let sortedMap = new Map([...map].sort((a,b) => b[1]-a[1]))

    const max = [...sortedMap][0][1]

    //loop map to make array of highest values
    for(let[key,value]of sortedMap){
        if(value === max)
            ans.push(key)
    }

    return ans

}


console.log(calculateMode([1,2,3,3]))         // => [3]
console.log(calculateMode([4.5, 0, 0]))       // => [0]
console.log(calculateMode([1.5, -1, 1, 1.5])) // => [1.5]
console.log(calculateMode([1,1,2,2]))         // => [1,2]
console.log(calculateMode([1,2,3]))         // => [1,2,3], because all occur with equal frequency
console.log(calculateMode(["who", "what", "where", "who"])) // => ["who"]