import Button from "./Button";
import LegendPicture from "../assets/LegendPic.svg";

function Legend() {
  return (
    <div className="flex flex-col-reverse items-center bg-custom-lighterGreen lg:flex-row justify-center mt-4 px-12">
      <span className="flex flex-col pb-4 gap-4">
        <h2 className="font-bold text-custom-green text-5xl lg:text-6xl">All your favorite sneakers, in one place.</h2>
        <p className="text-custom-lightGreen text-xl lg:text-lg">
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
