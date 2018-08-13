var array1 = [10, 3, -5, 101, 20];
var array2 = [5, 8, 10, -9, 1000];


function algo (arr1, arr2) {
	var out = [], current;

	arr1.sort(function (a, b) { return a-b; });

	for(var i = 0; i < arr2.length; i++) {
		current = arr2[i];
		out.push(current);
		for(var j = 0; j < arr1.length; j++) {
			if(arr1[j] >= current) {
				out[i] = arr1[j];
        break;
			}
		}
	}
	return out;
}


var result = algo(array1, array2);
console.log("Input array  = ", array2);
console.log("Output array = ", result);
