import express from "express";
const routes = express.Router();

import userController from "../src/controllers/userController.js";
import ingredientController from "../src/controllers/ingredientController.js";
import recipeController from "../src/controllers/recipeController.js";
import listController from "./controllers/listController.js";
import monitoracaoController from "./controllers/monitoracaoController.js";
import stockController from "./controllers/stockController.js";

/*
    Acho que faz sentido a gente tentar usar as rotas tipo:
    /api/usuario
    /api/ingrediente
*/

//Rota Usuario
routes.post("/usuario", userController.create);
routes.get("/usuario", userController.read);
routes.get("/usuario/:id", userController.readOne);
routes.delete("/usuario/:id", userController.deleteUser);
routes.patch("/usuario/:id", userController.update);

//Rota Ingrediente
routes.post("/ingrediente", ingredientController.create);
routes.get("/ingrediente", ingredientController.read);
routes.get("/ingrediente/:id", ingredientController.readOne);
routes.delete("/ingrediente/:id", ingredientController.deleteIngredient);
routes.patch("/ingrediente/:id", ingredientController.update);

//Rota Receita
routes.post("/receita", recipeController.create);
routes.get("/receita/:id", recipeController.read);
routes.get("/receita", recipeController.readAll);
routes.delete("/receita/:id", recipeController.deleteRecipe);

//Rota Lista
routes.post("/lista", listController.create);
routes.get("/lista/:id", listController.read);
routes.get("/lista", listController.readAll);
routes.delete("/lista/:id", listController.deleteList);
routes.patch("/lista/:id", listController.update);

//Rota Monitoracao
routes.post("/monitoracao", monitoracaoController.create);
routes.get("/monitoracao", monitoracaoController.read);
routes.get("/monitoracao/:id", monitoracaoController.readOne);
routes.delete("/monitoracao/:id", monitoracaoController.remove);
routes.patch("/monitoracao/:id", monitoracaoController.update);

//Rota Estoque de um Usuário
routes.get("/estoque/:userId/ingredientes", stockController.read);
routes.get("/estoque/", stockController.readAll);


export default routes;
