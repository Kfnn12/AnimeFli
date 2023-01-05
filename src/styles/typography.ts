import { styled } from "twin.macro";

export const H1 = styled.h1<{color?: string}>`
  font-size: 40px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const H2 = styled.h2<{color?: string}>`
  font-size: 28px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const H3 = styled.h3<{color?: string}>`
  font-size: 24px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const H4 = styled.h4<{color?: string}>`
  font-size: 20px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const BodyText = styled.p<{color?: string}>`
  font-size: 16px;
  font-weight: 500;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const InputText = styled.p<{color?: string}>`
  font-size: 16px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
export const NormalText = styled.p<{color?: string}>`
  font-size: 14px;
  font-weight: 400;
  color: ${({color}) => color ?? "#f5f5f5"};
  text-align: center;
`
export const ButtonText = styled.p<{color?: string}>`
  font-size: 16px;
  font-weight: 700;
  color: ${({color}) => color ?? "#f5f5f5"};
`
