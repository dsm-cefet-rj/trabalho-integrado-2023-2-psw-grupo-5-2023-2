import { useEffect, useState } from "react";
import '../../styles/ingrediente.css';
import '../../styles/receita.css';
import { Link } from "react-router-dom";
import Routes from "../../routes";

export default function DetalhesPopup({
    id, 
    favoritavel,
    removeObjeto,
    favoritaObjeto,
    rotaConsulta,
    redundante = false,
}) {
    
    var [popup, setPopup] = useState(false);
    var [favoritavel, setFavoritavel] = useState(favoritavel);
    var [redundante, setRedundante] = useState(redundante);
    console.log(redundante);
    console.log(favoritavel);

    useEffect(() => {
        if (redundante === true) { setPopup(true); }
    })

    return(
        <>
        <div className="col-3 mx-1 btn btn-primary" onClick={e => setPopup(!popup)} hidden={redundante}>
        
            <div className="" hidden={popup}>
                <i className="bi bi-three-dots-vertical mx-auto"></i>
            </div>

            <div className="my-1 py-1 mx-auto" hidden={!popup}>
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
                <div className="btn btn-primary col py-3 mx-1 my-1" hidden={(!(popup && favoritavel))}>
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