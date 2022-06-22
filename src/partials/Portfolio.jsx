import React from "react";
import Slider from "../utils/ImageSlider";
import img from '../images/pexels-gustavo-galeano-maz-7377687.jpg'
function FeaturesBlocks() {
   const images = [
        {
          id: 1,
          src: img,
          alt: "Placeholder image",
        },
        {
          id: 2,
          src: img,
          alt: "Placeholder image",
        },
        {
          id: 3,
          src: img,
          alt: "Placeholder image",
        },
        {
          id: 4,
          src: img,
          alt: "Placeholder image",
        },
        {
          id: 5,
          src: img,
          alt: "Placeholder image",
        },
        {
          id: 6,
          src: img,
          alt: "Placeholder image",
        },
      ];
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Portfolio</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <Slider images={images} />
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
