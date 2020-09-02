function DisplayingIngredients(cocktails) {
    function getUnique(array) {
        var uniqueArray = [];
        // Loop through array values
        for (i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    };
    var ingredients = []
    for (i = 0; i < 5; i++) {
        for (y = 1; y < 7; y++) {
            string = `ingredient${y}`;
            ingredients.push(cocktails[i][string]);
        };
    };
    var filtered = ingredients.filter(el => {
        return el != null;
    });
    var uniqueIngr = getUnique(filtered);
    // ==========================
    // GENERATING RANDOM NUMBERS

    var arrLength = uniqueIngr.length;
    var random = [];
    for (i = 0; i < arrLength; i++) {
        random.push(Math.floor(Math.random() * arrLength))
    }
    var randomNumbers = getUnique(random);
    randomNumbers.splice(5);

    // ===========================
    var ingr = {
        ingredient1: uniqueIngr[randomNumbers[0]],
        ingredient2: uniqueIngr[randomNumbers[1]],
        ingredient3: uniqueIngr[randomNumbers[2]],
        ingredient4: uniqueIngr[randomNumbers[3]],
        ingredient5: uniqueIngr[randomNumbers[4]]
    }
    var cocktailIngredients = JSON.parse(JSON.stringify(ingr));
    return cocktailIngredients;
}
module.exports = DisplayingIngredients;