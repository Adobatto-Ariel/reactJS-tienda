import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../list/Item";

function ItemCategory() {
  const [CategoryFetch, setCategoryFetch] = useState([]);
  const params = useParams();
  /* console.log(params.category);
   */
  const [isLoading, setIsLoading] = useState(true);
  const fetchCategory = () => {
    fetch(`https://api.npoint.io/12da0b198a1c538580f4/`)
      .then((resp) => resp.json())
      .then((data) => {
        const myData = data.filter((item) => item.category === params.category);
        setCategoryFetch(myData);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCategory();
      setIsLoading(false);
    }, 1000);
  }, [params]);
  return (
    <>
      <main className="ItemList">
        {isLoading && (
          <div className="container_loader">
            <div className="loader">
              <p>MV Kydex® ARG</p>
              <span>Loading ...</span>
            </div>
          </div>
        )}
        {CategoryFetch &&
          CategoryFetch.map((CategoryFetch) => (
            <Item
              id={CategoryFetch.id}
              title={CategoryFetch.title}
              subtitle={CategoryFetch.subtitle}
              alt={CategoryFetch.alt}
              src={CategoryFetch.src}
              price={CategoryFetch.price}
              stock={CategoryFetch.stock}
            />
          ))}
      </main>
    </>
  );
}

export default ItemCategory;
