const arr1 = [33, 22, 55, 44, 11, 33, 5];

const arr2 = [22, 55, 77, 88, 99, 99, 88];

// Union of two arrays
const union = [... new Set([...arr1, ...arr2])];
console.log(union); // [33, 22, 55, 44, 11, 5, 77, 88, 99]


// Intersection
const intersection = [...new Set(arr1)].filter(item => arr2.includes(item));

// Difference
union.filter(item => !intersection.includes(item));