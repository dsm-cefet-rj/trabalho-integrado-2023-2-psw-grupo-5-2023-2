import React from "react";
import "../../styles/rodape.css";
import iconeHomePage from "../../images/menu-home-page.png";
import iconeCompras from "../../images/menu-lista-compras.png";
import iconeIngrediente from "../../images/menu-ingredientes.png";
import iconeReceitas from "../../images/menu-receitas.png";
import iconeFavoritos from "../../images/menu-favorito.png";

//LINK do ROUTER
import { Link } from "react-router-dom";
import authService from "../../auth/auth.service";

export default function Rodape() {
  return (
    <div className="navbar bg-secondary px-5 mt-auto sticky-bottom">
      <Link
        to="/"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Página Inicial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ff3d3d"
          class="bi bi-house-fill icone-home-page"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </svg>
      </Link>
      <Link
        to="/listas-de-compras"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Lista de Compras"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ff3d3d"
          class="bi bi-cart3 icone-compras"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </Link>
      <Link
        to="/estoque"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Estoque"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ff3d3d"
          class="bi bi-cake2-fill icone-ingrediente"
          viewBox="0 0 16 16"
        >
          <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886c-.354-.06-.689-.127-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15.19 15.19 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806Zm-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17c.341-.013.675-.031 1-.055V1.806Zm-3 0v5.176c-.341-.012-.675-.03-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806Z" />
          <path d="M4.5 6.988V4.226a22.6 22.6 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017c.332.024.672.043 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29.015 29.015 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009c.347-.012.687-.03 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112c.345.031.679.07 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049c.364-.061.71-.13 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603-2.102 0-4.022-.227-5.432-.603-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046c.323.077.669.147 1.033.208l.292.05a.25.25 0 0 0 .291-.247ZM1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.938.938 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.938.938 0 0 1-1.17.276 1.938 1.938 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82Z" />
        </svg>
      </Link>
      <Link
        to="/receitas"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Receitas"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ff3d3d"
          class="bi bi-book icone-receita"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
        </svg>
      </Link>
      <Link
        to="/login"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Login"
        onClick={authService.logout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ff3d3d"
          class="bi bi-person-circle icone-favorito"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </Link>
    </div>
  );
}
