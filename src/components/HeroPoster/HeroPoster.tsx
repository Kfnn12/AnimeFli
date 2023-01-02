import React, { useEffect, useRef, useState } from "react";
import "twin.macro";
import Poster from "../../assets/images/img1.jpg";
import { HeroPosterWrapper, RandomButton } from "./style";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/caretRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/caretLeft.svg";
import { styled } from "twin.macro";
import { getAPI } from "../../api";
import SlideshowImages from "./SlideshowImages";

const TOTAL_SLIDES = 3; // n-1 in Array
export default function HeroPoster() {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
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
  const getData = () =>
    getAPI("recent-release", "").then((res) => {
      if (res.status === 200) {
        setData(res.data);
        console.log(data);
      } else {
        console.log(res);
      }
    });

  // const desired = (e: any) => {
  //   setCurrent(Number(e.target.id));
  // };

  useEffect(() => {
    if (ref.current != null) {
      ref.current.style.transition = "all 0.2s ease-in-out";
      ref.current.style.transform = `translateX(-${current}00%)`;
    }
    getData();
  }, [current]);
  return (
    <Wrapper>
      <div className="frame">
        <div className="box-container" ref={ref}>
          {data.map((item, idx) => (
            <SlideshowImages anime={item} key={idx} />
          ))}
        </div>
      </div>
      <div className="button-container">
        <div className="button" onClick={next}>
          <ArrowRight />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 27px;
  color: #fff;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
