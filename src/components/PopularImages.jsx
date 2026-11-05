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
  { id: 21, picture: Adidas, name: "Adidas" },
  { id: 22, picture: Nike, name: "Nike" },
  { id: 23, picture: Puma, name: "Puma" },
  { id: 24, picture: Fila, name: "Fila" },
  { id: 25, picture: Balance, name: "New Balance" },
  { id: 26, picture: Reebok, name: "Reebok" },
  { id: 27, picture: Converse, name: "Converse" },
  { id: 28, picture: Vans, name: "Vans" },
  { id: 29, picture: Asks, name: "Asics" },
];

function PopularImages() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-10 my-4">
      <h4 className="font-bold text-gray-900 mb-4 text-xl sm:text-2xl">
        Popular Brands
      </h4>
      <div className="flex items-center overflow-x-auto scrollbar-hide gap-8 sm:gap-12 py-3 px-1">
        {items.map((item) => (
          <img
            key={item.id}
            src={item.picture}
            alt={item.name}
            className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 flex-none"
          />
        ))}
      </div>
    </div>
  );
}

export default PopularImages;
