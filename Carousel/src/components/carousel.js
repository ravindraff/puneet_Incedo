import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.src.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const keyPrevImg = (e) => {
    console.log("in keyPress", e.key);
    if (e.key === "ArrowLeft") {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (e.key === "ArrowRight") {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevImg} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextImg} />
      {props.src.map((imgSrc, index) => {
        return (
          <div className={index === current ? " slide active" : "slide"}>
            {index === current && (
              <input
                type="image"
                src={imgSrc.src}
                alt="...."
                className="image "
                onKeyUp={(e) => {
                  keyPrevImg(e);
                }}
                autoFocus
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
