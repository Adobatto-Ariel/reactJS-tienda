import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../list/ItemCount";
function ItemDetail() {
    const params = useParams()
    const [detailFetch, setDetailFetch] = useState([])
    const fetchDetail = () => {
        fetch(`https://api.npoint.io/12da0b198a1c538580f4/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setDetailFetch(data)
        })
    }
    
    useEffect(() =>{
        fetchDetail()
    }, [])

    return (
        <>
        {detailFetch.length !==0 && 
            <div className="ItemDetail">
            <img src={detailFetch.src} className="card-img-top" alt={detailFetch.alt} />
            <div className="card-body">
                <p>★ ★ ★ ★ ★</p>
                <h3 className="price">${detailFetch.price}</h3>
                <h4 className="card-title">{detailFetch.title}</h4>
                <h6 className="subtitle">{detailFetch.subtitle}</h6>
                <em>Descripción:</em>
                <p className="description">{detailFetch.description}</p>
                <ItemCount stock={detailFetch.stock} />
                <button className="comprar btn btn-success">Comprar</button>
            </div>
        </div>}
        </>
    );
}

export default ItemDetail;