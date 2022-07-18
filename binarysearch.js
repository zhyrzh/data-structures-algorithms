const binarySearch = (arr, key) => {
    let left = 0;
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((right + left)/2)
        if(arr[mid] === key){
            return mid
        }else if(key > arr[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }   
    }

    return -1

}

let findKey = binarySearch([1, 2, 5, 6, 9, 15, 21, 33], 15)
console.log("the key is: ",findKey)
// [1, 2, 5, 6, 9, 15, 21, 33]
//  left = 0
//  right = 1          
          