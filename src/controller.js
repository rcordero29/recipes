let db = [];

let getRecipes = function (req, res) {
  console.log('fetch recipes');
  //should return all the recipes
  res.json(db);
};

let addRecipe = function (req, res) {
  console.log('adding recipes');
  let input = req.body;
  db.push(input);
  res.json('add recipes response here');
};

let deleteRecipe = function (pos) {
  console.log('Processing the delete logic');
};

let updateRecipe = function (req, res) {
  console.log('deleting recipe');
  res.json('update recipe response here');
};

let controller = {
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
};

module.exports = controller;
