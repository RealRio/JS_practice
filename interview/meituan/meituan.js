//line=readline()
//print(line)
console.log("Hello World!");

// [1, 2, 3, 3, 4, 4, 5];

// 有序，可重复  3 -> 3, 4 -> 5, logn
function getLastIdx(arr, k) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left < right-1) {
    mid = Math.floor((left + right) / 2);
    console.log(mid,arr[mid])
    if (arr[mid] === k) {
      left = mid;
      continue;
    }
    if (arr[mid] < k) {
      left = mid + 1;
      continue;
    }
    if (arr[mid] > k) {
      right = mid - 1;
    }
  }
  if(arr[right]===k)
        return right;
  return left;
}

let arr = [1, 2, 3, 3, 4, 4, 4];
console.log(getLastIdx(arr, 4));
