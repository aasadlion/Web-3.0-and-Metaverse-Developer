const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

// 1 Remove the first item and the last item.
theList.pop();
theList.shift();
 
// 2 Add FIRST to the start of the array.
theList.unshift("FIRST");


// 3 Assign hello World to the fourth item value.
 theList.splice(3,0,"hello World")

 // 4 Assign MIDDLE to the third index value.
theList.splice(2,0,"MIDDLE")


// // 5 Add LAST to the last position in the array.
theList.push("LAST")
console.log(theList)