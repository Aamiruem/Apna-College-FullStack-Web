let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]];

for (let list of heroes) {
    console.log("\n", list);
    for (hero of list) {
        console.log(hero);
    }
}
