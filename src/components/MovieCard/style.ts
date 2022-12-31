import { styled } from "twin.macro";

export const MovieCardWrapper = styled.div`
  border-radius: 10px;
  margin: 10px;
  flex-direction: column;
  width: 250px;
  z-index: 100;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.5s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  .bottom {
    display: none;
    color: #fff;
    padding: 10px;
    background-color: gray;
    button {
      text-align: center;
      :hover {
        opacity: 0.8;
      }
    }
  }
  :hover {
    transform: scale(1.1);
    height: 220px;
    img {
      height: 60%;
    }
    .bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
