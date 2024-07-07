import Nike from "../assets/nike.svg";
import Adidas from "../assets/adidas.svg";
import Puma from "../assets/puma.svg";
import Fila from "../assets/fila.svg";
import Balance from "../assets/balance.svg";
import Reebok from "../assets/reebok.svg";
import Converse from "../assets/converse.svg";
import Vans from "../assets/vans.svg";
import Asks from "../assets/asks.svg";

const items = [
  {
    picture: Adidas,
  },
  {
    picture: Nike,
  },
  {
    picture: Puma,
  },
  {
    picture: Fila,
  },
  {
    picture: Balance,
  },
  {
    picture: Reebok,
  },
  {
    picture: Converse,
  },
  {
    picture: Vans,
  },
  {
    picture: Asks,
  },
];
function PopularImages() {
  return (
    <>
      <h4>Popular Brands</h4>
      <div className="flex justify-between">
        {items.map((item) => {
          if (item) {
            return <img key={item.id} src={item.picture} />;
          }
        })}
      </div>
    </>
  );
}

export default PopularImages;
