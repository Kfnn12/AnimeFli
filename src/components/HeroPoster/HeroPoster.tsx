import React, { useEffect, useRef, useState } from "react";
import "twin.macro";
import Poster from "../../assets/images/img1.jpg";
import { HeroPosterWrapper, RandomButton } from "./style";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/caretRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/caretLeft.svg";
import { styled } from "twin.macro";
const bgImage = "https://cdnimg.xyz/cover/deep-insanity-the-lost-child.png";

const TOTAL_SLIDES = 3; // n-1 in Array
export default function HeroPoster() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>(null);

  const next = () => {
    if (current >= TOTAL_SLIDES) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  // const desired = (e: any) => {
  //   setCurrent(Number(e.target.id));
  // };

  useEffect(() => {
    if (ref.current != null) {
      ref.current.style.transition = "all 0.2s ease-in-out";
      ref.current.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="frame">
          <div className="box-container" ref={ref}>
            <div className="box" style={{ backgroundImage: `url(${Poster})` }}>
              <p tw="text-white text-[42px] font-medium">SPIDERMAN</p>
              <p tw="font-light ">
                ACTION, ADVENTURE, COMEDY{" "}
                <span tw="text-[12px] ml-2">%94 match</span>
              </p>
              <div tw="flex gap-[10px] ">
                <button tw="w-[100px] rounded-[11px] bg-[#D22F27] h-[40px]">
                  Watch
                </button>
                <button tw="w-[50px] font-light text-[24px] rounded-[11px]  h-[40px] backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5)]">
                  +
                </button>
              </div>
            </div>
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
          </div>
        </div>
        <div className="button-container">
          {/* <div className="button" onClick={prev}>
            <ArrowLeft/>
          </div> */}
          <div className="button" onClick={next}>
            <ArrowRight />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 27px;
  color: #fff;
  position: relative;

  .frame {
    width: 100%;
    overflow: hidden; // to hide the other boxs
    border-radius: 20px;
  }

  .box-container {
    display: flex;
  }

  .box {
    padding: 40px;
    background: #00e7ff;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 14px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .button-container {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 150px;
    /* backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5) */
  }

  .button {
    background-color: rgba(69, 71, 82, 0.5);
    backdrop-filter: blur(10px);
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    margin: 10px;
    user-select: none;
    cursor: pointer;
  }
`;
