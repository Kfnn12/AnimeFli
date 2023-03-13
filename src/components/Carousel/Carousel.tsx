import React, { useEffect, useState } from "react";
import { styled } from "twin.macro";

export function CarouselItem({ children, width }: any) {
  return (
    <StyledCarouselItem className="carousel-item" style={{ width: width }}>
      {children}
    </StyledCarouselItem>
  );
}

export default function Carousel({ children }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  function updateIndex(newIndex: number) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <StyledCarousel
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => updateIndex(index)}
            >
              <div></div>
            </button>
          );
        })}
      </div>
    </StyledCarousel>
  );
}

const StyledCarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 500px;
  color: #fff;
  box-shadow: inset 0px 0px 70px 30px rgba(23, 24, 28, 0.9);
  background: radial-gradient(70.25% 171.94% at -14.87% 49.95%, #000000 0%, rgba(84, 78, 78, 0) 100%);
  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -2;
    display: block;
  }
`;
const StyledCarousel = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }
  .indicator {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 30px;
  }
  .indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 auto;
    width: 100%;
    bottom: 30px;
  }
  .indicators > button {
    background-color: white;
    width: 7px;
    height: 7px;
    border-radius: 30px;
    margin: 3px;
  }
  .indicators > button.active {
    background-color: gray;
    color: #fff;
  }
  @media screen and (max-width: 400px) {
   height : 430px;
  }
`;
