const express = require('express');
const router = express.Router();
const controller = require("./controller")

router.get ("/recipes", controller.getRecipes)

router.post("/recipes", controller.addRecipe)

router.delete("/recipes/:pos", controller.deleteRecipe)

router.put("/recipes", controller.updateRecipe)



router.put('/recipes/:pos', function (req, res) {
  console.log('/PUT recipes', req.params.pos);
  res.json('PUT response goes here');
});

module.exports = router;
