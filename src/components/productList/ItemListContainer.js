import Card from "./Card";
import "./ItemListContainer.css";

function ItemListContainer() {
  return (
    <main className="ItemListContainer">
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera interna simple con clip fino y cuerno de ocultación. Revolver 'the judge'."
        src=""
        price="10000"
        stock="15"
      />
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera externa NIVEL 1 con corte bajo (ventana eyectora a la vista) y sistema de pasa cinto 'tek-lok'."
        src=""
        price="11000"
        stock="10"
      />
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera interna con porta cargador incluido desmontable, con clips anchos y cuerno de ocultación. DUO TONO. Bersa Thunder Pro."
        src=""
        price="15500"
        stock="5"
      />
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera externa NIVEL 1, corte alto (ventana eyectora OCULTA) con pasa cinto cerrado en polímero, para cinto o correaje de 1.5 y 1.75 pulgadas de ancho. Bersa TPR9 T."
        src=""
        price="15000"
        stock="0"
      />
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera interna con porta cargador incluido desmontable, con clips finos y cuerno de ocultación. DUO TONO. GLOCK 17."
        src=""
        price="16000"
        stock="11"
      />
      <Card
        title="Pistolera"
        alt="Pistolera"
        description="Pistolera externa NIVEL 2 (mecánico) con base de cintura y tira al muslo. Bersa TPR9."
        src=""
        price="12300"
        stock="4"
      />
    </main>
  );
}

export default ItemListContainer;
