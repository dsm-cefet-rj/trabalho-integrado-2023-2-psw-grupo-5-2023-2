import React from "react";
import { Route, BrowserRouter, redirect } from "react-router-dom";

// Páginas
import Login from "./pages/login/Login.jsx";
import HomePage from "./pages/principal/HomePage.jsx";
import NovoIngrediente from "./pages/estoque/NovoIngrediente.jsx";
import EditarIngrediente from "./pages/estoque/EditarIngrediente.jsx";
import Estoque from "./pages/estoque/Estoque.jsx";
import Cadastro from "../src/pages/login/Cadastro.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import NovaListaDeCompras from "./pages/compras/NovaListaDeCompras.jsx";
import ListaDeCompras from "./pages/compras/ListasDeCompras.jsx";
import Receitas from "./pages/receitas/Receitas.jsx";
import NovaReceita from "./pages/receitas/NovaReceita.jsx";
import DetalhesIngredientes from "./pages/estoque/DetalhesIngredientes.jsx";
import DetalhesReceita from "./pages/receitas/DetalhesReceita.jsx";
import DetalhesCompras from "../src/pages/compras/DetalhesCompras.jsx";
import EditarEstoque from "./pages/estoque/EditarEstoque.jsx";

// path: 'caminho após o link'
//element: <Página/>
export const Routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "novo-ingrediente",
    element: <NovoIngrediente />,
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "editar-ingrediente/:id",
    element: <EditarIngrediente />,
  },
  {
    path: "estoque",
    element: <Estoque />,
  },
  {
    path: "/editar-estoque/",
    element: <EditarEstoque />,
  },
  {
    path: "cadastre-se",
    element: <Cadastro />,
  },
  {
    path: "nova-lista-de-compras",
    element: <NovaListaDeCompras />,
  },
  {
    path: "listas-de-compras",
    element: <ListaDeCompras />,
  },
  {
    path: "receitas",
    element: <Receitas />,
  },
  {
    path: "nova-receita",
    element: <NovaReceita />,
  },
  {
    path: "/detalhes-ingrediente/:id",
    element: <DetalhesIngredientes />,
  },
  {
    path: "/detalhes-receita/:id",
    element: <DetalhesReceita />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/detalhes-lista-compras/:id",
    element: <DetalhesCompras />,
  },
];

const autenticado = false;

const loader = async () => {
  // const user = await getUser();
  if (autenticado) {
    return redirect("/");
  }
  return redirect("/login");
};

export default Routes;
