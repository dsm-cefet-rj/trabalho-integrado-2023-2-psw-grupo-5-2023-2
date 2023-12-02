import React from "react";
import Rodape from "../../components/compartilhados/Rodape";
import logo from "../../images/easycook1-nobg.png";
import ContentHP from "../../components/ContentHomePage";

//LINK do ROUTER
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="">
      <div className="container min-vh-100" id="home">
        <img src={logo} className="d-block blend-mode"></img>
        <ContentHP></ContentHP>
      </div>
      <Rodape></Rodape>
    </div>
  );
}
