var mongoose = require("mongoose");

var cocktailSchema = new mongoose.Schema({
    name: String,
    category: String,
    alcoholic: String,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    ingredient4: String,
    ingredient5: String,
    ingredient6: String,
    img: String
});

module.exports = mongoose.model("Cocktail", cocktailSchema);