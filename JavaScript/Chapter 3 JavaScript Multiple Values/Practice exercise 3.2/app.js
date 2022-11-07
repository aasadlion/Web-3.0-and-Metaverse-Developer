
    let shopping=[];                             //1. Create an empty array to use as a shopping list.
     shopping.push("Milk","Bread","Apples");      //2. Add Milk, Bread, and Apples to your list.
     shopping.splice(1,1,"Bananas","Eggs")         //3. Update "Bread" with Bananas and Eggs.
      shopping.pop()                                // 4. Remove the last item from the array and output it into the console.
     console.log(shopping)

   shopping.sort()                             //5. Sort the list alphabetically.

   let indexValue=shopping.indexOf("Milk")       // 6. Find and output the index value of Find and output the index value of Milk..


   shopping.splice(1,0,"Carrots","Lettuce")     // 7. After Bananas, add Carrots and Lettuce.


    let newlist =["Juice","Pop"]               //  8. Create a new list containing Juice and Pop.
    let combine =shopping.concat(newlist).concat(newlist)      
    let lastValue=combine.slice(-1)                         //9. Combine both lists, adding the new list twice to the end of the first list
    console.log(lastValue);
    console.log(combine);              //  11. Your final list show
