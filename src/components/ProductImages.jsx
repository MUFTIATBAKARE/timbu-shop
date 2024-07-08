import A from "../assets/A.svg";
import B from "../assets/B.svg";
import C from "../assets/C.svg";
import D from "../assets/D.svg";
import E from "../assets/E.svg";


const items = [
  {
    picture: A,
  },
  {
    picture: B,
  },
  {
    picture: C,
  },
  {
    picture: D,
  },
  {
    picture: E,
  },
];
function ProductImages() {
  return (
    <>
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

export default ProductImages;
