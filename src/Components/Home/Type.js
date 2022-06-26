import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Android Developer",
          "MERN Stack Developer",
          "Passionate Coder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
};

export default Type;
