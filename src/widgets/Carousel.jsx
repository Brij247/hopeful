import { useEffect, useState } from "react";

const images = ["/hope-image1.jpg", "/hope-image2.jpg"];

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
