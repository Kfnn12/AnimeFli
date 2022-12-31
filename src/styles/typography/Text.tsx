import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { variables } from "../../constants/theme";

interface Props {
  mediumBold?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  subdued?: boolean;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
  ellipsis?: boolean;
}
const Text = styled.p<Props>`
  font-size: 1.4rem;
  ${(props) =>
    props.mediumBold &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 600;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.subdued &&
    css`
      color: ${variables.colors.grey};
    `};
  ${(props) =>
    props.small &&
    css`
      font-size: 1.2rem;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-size: 1.6rem;
    `};
  ${(props) =>
    props.big &&
    css`
      font-size: 1.8rem;
    `};
  ${(props) =>
    props.ellipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
export default Text;