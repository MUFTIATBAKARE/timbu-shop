import Button from "./Button";
import LegendPicture from "../assets/LegendPic.svg";

function Legend() {
  return (
    <div className="flex items-center justify-center">
      <span>
        <h2 className="font-bold text-green-800">All your favorite sneakers, in one place.</h2>
        <p className="text-green-600">
          Exclusively for sneakerheads of all ages, gender, and the rest of
          humanity
        </p>
        <Button body="Explore" />
      </span>
      <img src={LegendPicture} alt="Legend Picture" className="LegendPic" />
    </div>
  );
}

export default Legend;
