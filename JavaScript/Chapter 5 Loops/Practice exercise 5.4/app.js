 
 let tablearr=[];

 for (let i = 0; i < 5; i++) {
    tablearr.push([])
    for (let j = 0; j < 10; j++) {
 
        tablearr[i].push([j])
    }
 }

 console.table(tablearr)