function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

printTable(5)


function printTables(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTables(5)
