import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sneak0 from "../assets/Sneak0.png";
import Sneak1 from "../assets/Sneak1.png";
import Sneak2 from "../assets/Sneak2.png";
import Sneak3 from "../assets/Sneak3.png";
import Sneak4 from "../assets/Sneak4.png";
import Tro0 from "../assets/Tro0.png";
import Tro1 from "../assets/Tro1.png";
import Tro2 from "../assets/Tro2.png";
import Tro3 from "../assets/Tro3.png";
import Tro4 from "../assets/Tro4.png";
import Tro5 from "../assets/Tro5.png";
import Tro6 from "../assets/Tro6.png";
import Tro7 from "../assets/tro7.png";
import Tro8 from "../assets/Tro8.png";

const Hero = () => {
  const images = [
    Sneak0,
    Sneak1,
    Sneak2,
    Sneak3,
    Sneak4,
    Tro0,
    Tro1,
    Tro2,
    Tro3,
    Tro4,
    Tro5,
    Tro6,
    Tro7,
    Tro8,
  ];
  const [index, setIndex] = useState(0);

  const handleImageChange = () => {
    setIndex((image) => (image + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleImageChange, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-slate-100 grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-6 py-8">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={images[index]}
          alt={`Hero promotional image ${index + 1}`}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">UP TO</h1>
        <h2 className="text-6xl md:text-7xl text-red-500 font-extrabold">
          50% OFF
        </h2>
        <p className="text-xl font-medium">SELECT STYLES</p>
        <p className="text-gray-600">
          Stock up on bestsellers while the prices are extra nice.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <Link to="/men">
            <button className="bg-black text-white font-semibold p-3 w-36 text-center rounded-xl hover:bg-gray-800 transition-all">
              Men
            </button>
          </Link>
          <Link to="/women">
            <button className="bg-black text-white font-semibold p-3 w-36 text-center rounded-xl hover:bg-gray-800 transition-all">
              Women
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
