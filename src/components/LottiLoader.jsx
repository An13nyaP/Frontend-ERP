import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json"; // adjust the path

const CenteredLoader = ({ width = 250, height = 250 }) => {
  return (
    <div className="flex justify-center items-center py-8 w-full">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{ width, height }}
      />
    </div>
  );
};

export default CenteredLoader;
