import React, { useEffect } from "react";
import Rodape from "../../components/compartilhados/Rodape";
import logo from "../../images/easycook1-nobg.png";
import ContentHP from "../../components/ContentHomePage";
import authService from "../../auth/auth.service";
import { useNavigate } from "react-router-dom";
import { FetchScript } from "../../scripts/ApiBackend";

export default function HomePage() {
  let navigate = useNavigate();
  const [ingredientes, setIngredientes] = React.useState([]);
  useEffect(() => {
    if (!authService.isAuthorized()) {
      navigate("/login");
    }
    FetchScript.listAllData(FetchScript.RequestPaths.ingredientes).then(
      (response) => {
        setIngredientes(response);
      }
    );
  }, []);

  return (
    <div className="">
      <div className="container min-vh-100" id="home">
        <img src={logo} className="d-block blend-mode"></img>
        <ContentHP ingredientes={ingredientes}/>
      </div>
      <Rodape></Rodape>
    </div>
  );
}
