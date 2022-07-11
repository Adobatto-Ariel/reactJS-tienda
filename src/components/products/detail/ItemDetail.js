import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../list/ItemCount";

function ItemDetail() {
  const params = useParams();
  const [detailFetch, setDetailFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchDetail = () => {
    fetch(`https://api.npoint.io/a02bf179839164f8f769/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDetailFetch(data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchDetail();
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="container_loader">
          <div className="loader">
            <p>MV Kydex® ARG</p>
            <span>Loading ...</span>
          </div>
        </div>
      )}
      {detailFetch.length !== 0 && (
        <div className="ItemDetail">
          <div className="containerImgBtn">
            <img
              src={detailFetch.src}
              className="card-img-top"
              alt={detailFetch.alt}
            />
            <div className="count">
              <ItemCount stock={detailFetch.stock} />
            </div>
          </div>
          <div className="card-body">
            <p className="sinDescuento">
              $
              {detailFetch.price >= 13000
                ? `${(detailFetch.price * 1.1).toFixed()}`
                : `${(detailFetch.price * 1.05).toFixed()}`}
            </p>
            <h3 className="priceDetail">${detailFetch.price}</h3>
            <span className="descuentoDetail">
              {detailFetch.price >= 13000 ? `10% OFF` : `5% OFF`}
            </span>
            <h4 className="card-title">{detailFetch.title}</h4>
            <h6 className="subtitle">Para: {detailFetch.subtitle}</h6>
            <p>★ ★ ★ ★ ★</p>
            <span>Color:</span>
            <div className="colorSelect">
              <div className="negro color"></div>
              <div className="verde color"></div>
              <div className="arena color"></div>
            </div>
            <div className="count-400">
              <ItemCount stock={detailFetch.stock} />
            </div>
            <em>Descripción:</em>
            <p className="description">{detailFetch.description}</p>
            <p className="description">
              Nuestros holster estan fabricados con materiales importados
              <strong> de primera calidad.</strong> Utilizamos hojas de kydex de
              0.80 y 0.125 pulgadas, como materia prima principal, y la
              combinación de herramientas y máquinas de última generación, para
              su creación. Los holster tienen una terminación artesanal,
              entregando a cada cliente un producto de calidad, superando
              cualquier espectativa operativa o estética.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
