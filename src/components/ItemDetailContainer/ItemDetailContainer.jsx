import React, { useEffect, useState } from "react";
import { getProductById } from "../../helpers/getData.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    /*recibo del useParams en el componente padre es un string,
    por eso que el id lo parseo a entero*/
    getProductById(parseInt(id), setProduct);
    // eslint-disable-next-line
  }, [id]);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
