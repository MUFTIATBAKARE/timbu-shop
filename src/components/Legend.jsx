import Button from "./Button";
import LegendPicture from "../assets/LegendPic.svg";

function Legend() {
  return (
    <div className="flex justify-around">
      <span>
        <h2>All your favorite sneakers, in one place.</h2>
        <p>
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
