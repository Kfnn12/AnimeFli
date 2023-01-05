import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import tw from "twin.macro";
// import { styled } from 'twin.macro';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "icon" | "outline";
  size?: "big" | "small" | "medium";
  fullWidth?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  text?: React.ReactNode;
  bgColor?: string
}

function Button(props: PropsWithChildren<ButtonProps>, ref: any) {
  const { children, bgColor, size, icon, loading, ...rest } = props;
  return (
    <ButtonContainer ref={ref} bgColor={bgColor} size={size} {...rest}>
      {children}
    </ButtonContainer>
  );
}

export default React.forwardRef(Button);

const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  height: 49px;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  ${tw`bg-gradient-to-r from-orange1 to-orange2 hover:opacity-[0.8]`}
  background-color: ${({bgColor}) => bgColor};
  ${(props) => {
    switch (props.variant) {
      case "icon":
        return css`
          ${tw`text-primary w-[49px] h-[49px] p-[10px] rounded-[50%] hover:opacity-[0.8]`}

          > svg,
          svg g {
            ${tw`stroke-black fill-black `}
          }
        `;
      case "outline":
        return css`
          ${tw`text-white w-[fit] border-white border-solid border-[1px] px-[25px]  bg-none bg-primary`}
        `
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          ${tw`w-[30px] h-[30px]`}
        `
    }
  }}
`;
