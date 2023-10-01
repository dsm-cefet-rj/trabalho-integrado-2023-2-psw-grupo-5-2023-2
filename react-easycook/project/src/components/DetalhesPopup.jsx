import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";
import Routes from "../routes";

export default function DetalhesPopup({
    id, 
    favoritavel,
    removeObjeto,
    favoritaObjeto,
    rotaConsulta,
}) {
    
    var [popup, setPopup] = useState(false);
    var [favoritavel, setFavoritavel] = useState(favoritavel);
    
    return(
        <>
        <div className="col-3 mx-1 btn btn-primary" onClick={e => setPopup(!popup)}>
        
            <div className="" hidden={popup}>
                <i className="bi bi-three-dots-vertical"></i>
            </div>

            <div className="my-1 py-1" hidden={!popup}>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
            </div>
            <div className="row mb-2 justify-content-center mt-3">
                <Link 
                    className="btn btn-primary col py-3 mx-1 my-1" 
                    hidden={!popup}
                    to={`/${rotaConsulta}/${id}`}>
                    <i className="bi bi-search"></i>
                </Link>
                <div className="btn btn-primary col py-3 mx-1 my-1" hidden={!(popup && favoritavel)}>
                    <i className="img-fluid bi bi-heart"></i>
                </div>
                <button className="btn btn-primary col py-3 mx-1 my-1" 
                    hidden={!popup} 
                    onClick={removeObjeto}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </>
    )
}