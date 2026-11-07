import Button from "./Button";
import LegendPicture from "../assets/LegendPic.svg";

function Legend() {
  return (
    <div className="flex flex-col-reverse items-center bg-custom-lighterGreen lg:flex-row justify-between mt-4 px-6 sm:px-12 py-10 rounded-3xl mx-4 sm:mx-8 md:mx-10 gap-8">
      <div className="flex flex-col pb-4 gap-5 max-w-xl text-center lg:text-left items-center lg:items-start">
        <h1 className="font-extrabold text-custom-green text-3xl sm:text-5xl lg:text-6xl leading-tight">
          All your favorite sneakers, in one place.
        </h1>
        <p className="text-custom-lightGreen text-base sm:text-lg max-w-lg">
          Exclusively for sneakerheads of all ages, gender, and the rest of
          humanity. Authenticity guaranteed on every pair.
        </p>
        <div className="pt-2">
          <Button body="Explore Catalog" to="/product" />
        </div>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex items-center justify-center">
        <img
          src={LegendPicture}
          alt="Featured Sneakers"
          className="w-full h-auto object-contain max-h-[380px]"
        />
      </div>
    </div>
  );
}

export default Legend;
