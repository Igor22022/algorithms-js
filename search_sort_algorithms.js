/****
     * searching algorithms
     * let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];
     * usage: console.log(searchSort(array, value));
 ****/

//  Linear search - O(log n)

function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) return i;
    }
    return -1;
}

/*************************************************************************/

// Binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

/*************************************************************************/

// jump search

function jumpSearch(arrayToSearch, valueToSearch){
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length)-1;
    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length)-1] < valueToSearch)
    {
      lowerBound = step;
      step += step;
      if (lowerBound >= length){
        return -1;
      }
    }
    
    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch)
    {
      lowerBound++;
      if (lowerBound == upperBound){
        return -1;
      }
    }
    if (arrayToSearch[lowerBound] == valueToSearch){
      return lowerBound;
    }
    return -1;
}

/*************************************************************************/
// Interpolation Search
  
function InterpolationSearch(t,A) {         // t - искомый элемент,
                                            // A - упорядоченный массив, в котором ищем.
    var mid, low = 0, high = A.length-1;

    while (A[low] < t && A[high] > t)
    {  mid = low + Math.floor( ((t-A[low])*(high-low))/(A[high]-A[low]) );
        if (A[mid] < t) low = mid+1;
        else if (A[mid] > t) high = mid-1;
        else return mid;
    }

    if (A[low] === t) return low;           // На выходе индекс искомого элемента.
    else if (A[high] === t) return high;    // Если искомого элемента нет в массиве, то -1.
    else return -1;
}
  
/****
     * sorting algorithms
     * let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];
     * usage: console.log(bubbleSort(array));
 ****/

// Bubble Sort 
function bubbleSort(a){
    var n = a.length;
    for (var i = 0; i < n-1; i++){ // Выполняется для каждого элемента массива, кроме последнего.
        for (var j = 0; j < n-1-i; j++){ // Для всех последующих за текущим элементов
            if (a[j+1] < a[j]){ // выпоняется проверка, и если следующий элемент меньше текущего
            var t = a[j+1]; a[j+1] = a[j]; a[j] = t; // то эти элементы меняются местами.
            }
        }
    }                     
    return a;
};
  
/*************************************************************************/
// Selection Sort
function selectionSort(a){
    var n = a.length;
    for (var i=0; i<n-1; i++){ // Выполняется для каждого элемента массива, кроме последнего.
        var min = i; // В качестве текущего минимального устанавливается текущий элемент,
        for (var j=i+1; j<n; j++){ // а для всех последующих элементов
            if (a[j] < a[min]) min = j; // выпоняется проверка: если следующий элемент меньше текущего, он устанавливается в качестве минимального значения.
            var t = a[min]; a[min] = a[i]; a[i] = t; // Минимальный и текущий элементы меняются местами (если текущий = минимальный, то ничего страшного не случится).
        }
    }
    return a;
};

/*************************************************************************/

// insertion Sort
function insertionSort(a){
    var n = a.length;
    for (var i=0; i<n; i++){ // Выполняется для каждого элемента массива.
        var v = a[i], j = i-1; // Определяется значение текущего элемента, а также индекс предыдущего элемента.
        while(j >= 0 && a[j] > v){ // Пока индекс предыдущего элемента >= 0 и его значение больше значения текущего элемента.
            a[j+1] = a[j]; // Значением следующего за текущим элемента массива становится значение предыдущего элемента.
            j--; 
        }
        a[j+1] = v; // Значением следующего за текущим элемента массива становится значение текущего элемента
    }
    return a;
};

/*************************************************************************/

// Heap Sorting
var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max]) {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
        }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
        
        heap_root(input, 0);
    }
}

// var arr = [3, 0, 2, 5, -1, 4, 1];
// heapSort(arr);
// console.log(arr);

/*************************************************************************/

// Merge sort
    
// Split the array into halves and merge them recursively 
function mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr;
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
  
// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
  
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

/******************************************************************************/

// Quick sort
// first

function quickSort(arr) {
    if (arr.length < 2) return arr;
  
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    let left = [];
    let equal = [];
    let right = [];
  
    for (let element of arr) {
      if (element > pivot) right.push(element);
      else if (element < pivot) left.push(element);
      else equal.push(element);
    }
  
    return quickSort(left)
      .concat(equal)
      .concat(quickSort(right));
};

// second
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

/******************************************************************************/

// Shell sort

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }

    return arr;
}

/******************************************************************************/

// Counting sort
function countingSort(arr, min, max){
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}

/******************************************************************************/

// Radix sort
function getPosition(num, place){
    return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
}   // gives back bucket index  


function getMax(arr){
    let max=0;
    for(let num of arr){
    if(max < num.toString().length){
        max = num.toString().length
    }
    }
    return max
}  
function radixSort(arr){
    
    const max = getMax(arr);
    
    for(let i=0;i<max;i++){
        let buckets = Array.from({length:10},()=>[]) // creating 10 empty arrays
        
        for(let j=0;j<arr.length;j++){
        
            buckets[getPosition(arr[j],i)].push(arr[j]); //push the number into desired
                                                        // bucket
        }
        
        arr = [].concat(...buckets); 
    }

    return arr;
}

/******************************************************************************/