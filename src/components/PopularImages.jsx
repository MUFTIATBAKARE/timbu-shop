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
    id: 21,
    picture: Adidas,
  },
  {
    id: 22,
    picture: Nike,
  },
  {
    id: 23,
    picture: Puma,
  },
  {
    id: 24,
    picture: Fila,
  },
  {
    id: 25,
    picture: Balance,
  },
  {
    id: 26,
    picture: Reebok,
  },
  {
    id: 27,
    picture: Converse,
  },
  {
    id: 28,
    picture: Vans,
  },
  {
    id: 29,
    picture: Asks,
  },
];
function PopularImages() {
  return (
    <div className=" mx-10">
      <h4 className="font-semibold mb-6">Popular Brands</h4>
      <div className="flex justify-between ">
        {items.map((item) => {
          if (item) {
            return <img key={item.id} src={item.picture} />;
          }
        })}
      </div>
    </div>
  );
}

export default PopularImages;
